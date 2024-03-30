import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const initialValue = {
  limit: 10,
  pageParams: "1",
};

/** - 頁數`page`參數 */
export function useQueryPageParams(
  /** - 共有幾筆資料 */
  count?: number | null,
  /**
   *  - 一頁多少筆資料
   *
   * @default 10
   * */
  limit = initialValue.limit
) {
  const searchParams = useSearchParams();
  const page = parseInt(
    searchParams.get("page") || initialValue.pageParams,
    10
  );
  const _count = count && limit ? Math.ceil(count / limit) : 1;
  return useMemo(
    () => ({
      /** - 一頁多少筆資料 */
      limit,
      /** - 偏移位置 */
      offset: limit * (page - 1),
      /** - 總頁數 */
      count: _count,
      /** - 當前頁數參數 */
      page,
    }),
    [limit, _count, page]
  );
}
/** - 搜尋參數 */
export function useQuerySearchParams() {
  const searchParams = useSearchParams();

  function parseQueryParam<T>(
    paramName: string,
    defaultValue: T | undefined = undefined,
    parser: (value: string) => T = (value: any) => value
  ) {
    const paramValue = searchParams.get(paramName);
    return paramValue ? parser(paramValue) : defaultValue;
  }

  const searchTerm = parseQueryParam<string>("searchTerm");
  const startTime = parseQueryParam("startTime", 0, (value) =>
    parseInt(value, 10)
  );
  const endTime = parseQueryParam("endTime", 0, (value) => parseInt(value, 10));
  const category = parseQueryParam<string>("category");
  const categories = parseQueryParam<Array<string>>("categories");

  return {
    searchTerm,
    startTime: startTime ? new Date(startTime) : undefined,
    endTime: endTime ? new Date(endTime) : undefined,
    category,
    categories,
  };
}
