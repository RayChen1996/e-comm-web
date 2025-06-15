/**!SECTION
 * 
 *   "data": {
    "title": "新增第一篇文章",
    "description": "文章內容",
    "image": "test.testtest",
    "tag": [
      "tag1"
    ],
    "create_at": 1555459220,
    "author": "alice",
    "isPublic": false,
    "content": "這是內容"
  }
 */

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { DefaultValues } from "react-hook-form";

/** - cart`schema` */
export const schema = z.object({
  title: z
    .string({ required_error: "請輸入標題" })
    .trim()
    .min(1, { message: "請輸入標題" }),
  description: z
    .string({ required_error: "請輸入描述" })
    .trim()
    .min(1, { message: "請輸入描述" }),
  image: z
    .string({ required_error: "請輸入圖片網址" })
    .trim()
    .min(1, { message: "請輸入圖片網址" }),
  tag: z.array(z.string()).min(1, { message: "請至少選擇一個標籤" }),
  content: z
    .string({ required_error: "請輸入內容" })
    .trim()
    .min(1, { message: "請輸入內容" }),
});

/** - cart`schema`型別 */
export type SchemaType = z.infer<typeof schema>;

/** - cart */
export const defaultValues: DefaultValues<SchemaType> = {};

/** - cart解析器 */
export const resolver = zodResolver(schema);
