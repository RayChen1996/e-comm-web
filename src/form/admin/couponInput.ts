/**!SECTION
 * 
 *  "data": {
    "code": "testCode"
  }
 */

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { DefaultValues } from "react-hook-form";

/** - cart`schema` */
export const schema = z.object({
  code: z
    .string({ required_error: "請輸入優惠碼" })
    .trim()
    .min(1, { message: "請輸入優惠碼" }),
});

/** - cart`schema`型別 */
export type SchemaType = z.infer<typeof schema>;

/** - cart */
export const defaultValues: DefaultValues<SchemaType> = {};

/** - cart解析器 */
export const resolver = zodResolver(schema);
