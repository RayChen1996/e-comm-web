/**!SECTION
 * 
 *   "data": {
    "title": "[賣]動物園造型衣服3",
    "category": "衣服2",
    "origin_price": 100,
    "price": 300,
    "unit": "個",
    "description": "Sit down please 名設計師設計",
    "content": "這是內容",
    "is_enabled": 1,
    "imageUrl": "主圖網址",
    "imagesUrl": [
      "圖片網址一",
      "圖片網址二",
      "圖片網址三",
      "圖片網址四",
      "圖片網址五"
    ]
  }
 */

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { DefaultValues } from "react-hook-form";

/** - 商品`schema` */
export const schema = z.object({
  title: z
    .string({ required_error: "請輸入商品名稱" })
    .trim()
    .min(1, { message: "請輸入商品名稱" }),
  category: z
    .string({ required_error: "請選擇商品類別" })
    .trim()
    .min(1, { message: "請選擇商品類別" }),
  origin_price: z
    .number({ required_error: "請輸入原價" })
    .min(0, { message: "原價不能小於0" }),
  price: z
    .number({ required_error: "請輸入售價" })
    .min(0, { message: "售價不能小於0" }),
  unit: z
    .string({ required_error: "請輸入單位" })
    .trim()
    .min(1, { message: "請輸入單位" }),
  description: z
    .string({ required_error: "請輸入商品描述" })
    .trim()
    .min(1, { message: "請輸入商品描述" }),
  content: z
    .string({ required_error: "請輸入商品內容" })
    .trim()
    .min(1, { message: "請輸入商品內容" }),
  is_enabled: z.boolean().default(true),
  imageUrl: z
    .string({ required_error: "請上傳主圖網址" })
    .trim()
    .url({ message: "主圖網址格式不正確" }),
  imagesUrl: z
    .array(z.string().url())
    .min(1, { message: "至少上傳一張圖片網址" }),
});

/** - 商品`schema`型別 */
export type SchemaType = z.infer<typeof schema>;

/** - 商品 */
export const defaultValues: DefaultValues<SchemaType> = {};

/** - 商品解析器 */
export const resolver = zodResolver(schema);
