import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import qs from "qs";
import { produce } from "immer";

type ValueParams = string | null | undefined;
type SearchParamsObjectType = Record<string, unknown>;

/** - 產生單一搜尋詞 */
export default function useCreateQueryUrl<T extends SearchParamsObjectType>() {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const createQueryString = useCallback(
    (
      ...items: Array<
        [name: keyof T, value?: ValueParams | ValueParams[]] | null | undefined
      >
    ) => {
      const searchParamsObject = qs.parse(
        searchParamsString
      ) as SearchParamsObjectType;

      const updatedParams = produce(searchParamsObject, (draft) => {
        for (const item of items) {
          if (Array.isArray(item)) {
            const [name, value] = item;
            if (typeof name === "string" && value) {
              draft[name] = value;
            }
          }
        }
      });

      return qs.stringify(updatedParams);
    },
    [searchParamsString]
  );
  const removeQueryString = useCallback(
    (name: keyof T | (keyof T)[]) => {
      if (!name) {
        return searchParamsString;
      }
      const params = qs.parse(searchParamsString) as T;
      if (typeof name === "string") {
        delete params[name];
      } else if (Array.isArray(name)) {
        for (const paramName of name) {
          if (typeof paramName === "string") {
            delete params[paramName];
          }
        }
      }
      return qs.stringify(params);
    },
    [searchParamsString]
  );
  const searchParamsObject = useMemo(() => {
    const result: Partial<T> = {};
    const _params = qs.parse(searchParamsString) as Record<keyof T, any>;
    for (const key of Object.keys(_params)) {
      if (_params.hasOwnProperty(key)) {
        try {
          result[key as keyof T] = JSON.parse(_params[key]);
        } catch (error) {
          // 處理 JSON 解析錯誤
          console.error(`Error parsing JSON for key ${key}: ${error}`);
        }
      }
    }
    return result;
  }, [searchParamsString]);
  return {
    /** - 產生`query`字串 */
    createQueryString,
    /** - 刪除`query`字串 */
    removeQueryString,
    /** - 搜尋參數 */
    searchParams,
    /** - 搜尋參數物件 */
    searchParamsObject,
  };
}
/** - 組合搜尋詞 */
export function combinSearchUrl(
  pathname: string,
  searchParams?: ValueParams | ValueParams[]
) {
  if (!searchParams) {
    return pathname;
  }

  // 如果是字串，直接返回帶問號的字串
  if (typeof searchParams === "string") {
    return `${pathname}?${searchParams}`;
  }

  // 如果是陣列，過濾無效值再返回帶問號的字串
  if (Array.isArray(searchParams)) {
    const validParams = searchParams.filter(
      (item) => Boolean(item) && typeof item === "string"
    );
    if (validParams.length > 0) {
      return `${pathname}?${validParams.join("&")}`;
    }
  }

  return pathname; // 如果 searchParams 不是字串也不是陣列，直接返回 pathname
}
