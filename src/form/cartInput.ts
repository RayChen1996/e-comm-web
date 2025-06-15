import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { DefaultValues } from "react-hook-form";

/** - cart`schema` */
export const schema = z.object({
  product_id: z
    .string({ required_error: "請輸入帳號" })
    .trim()
    .min(1, { message: "請輸入帳號" }),
  qty: z
    .string({ required_error: "請輸入密碼" })
    .trim()
    .min(1, { message: "請輸入密碼" }),
});

/** - cart`schema`型別 */
export type SchemaType = z.infer<typeof schema>;

/** - cart */
export const defaultValues: DefaultValues<SchemaType> = {};

/** - cart解析器 */
export const resolver = zodResolver(schema);
