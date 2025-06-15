/**!SECTION
 * 
 *  "data": {
    "user": {
      "name": "test",
      "email": "test@gmail.com",
      "tel": "0912346768",
      "address": "kaohsiung"
    },
    "message": "這是留言"
  }
 */
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { DefaultValues } from "react-hook-form";

/** - cart`schema` */
export const schema = z.object({
  user: z.object({
    name: z
      .string({ required_error: "請輸入姓名" })
      .trim()
      .min(1, { message: "請輸入姓名" }),
    email: z
      .string({ required_error: "請輸入電子郵件" })
      .email({ message: "請輸入有效的電子郵件地址" }),
    tel: z
      .string({ required_error: "請輸入電話號碼" })
      .trim()
      .min(1, { message: "請輸入電話號碼" }),
    address: z
      .string({ required_error: "請輸入地址" })
      .trim()
      .min(1, { message: "請輸入地址" }),
  }),
  message: z
    .string({ required_error: "請輸入留言內容" })
    .trim()
    .min(1, { message: "請輸入留言內容" }),
});

/** - cart`schema`型別 */
export type SchemaType = z.infer<typeof schema>;

/** - cart */
export const defaultValues: DefaultValues<SchemaType> = {};

/** - cart解析器 */
export const resolver = zodResolver(schema);
