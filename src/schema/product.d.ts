/**!SECTION
 * 
 *  "products": [
    {
      "category": "衣服3",
      "content": "這是內容",
      "description": "Sit down please 名設計師設計",
      "id": "-L9tH8jxVb2Ka_DYPwng",
      "imageUrl": "主圖網址",
      "imagesUrl": [
        "圖片網址一",
        "圖片網址二",
        "圖片網址三",
        "圖片網址四",
        "圖片網址五"
      ],
      "is_enabled": 1,
      "num": 1,
      "origin_price": 100,
      "price": 600,
      "title": "[賣]動物園造型衣服3",
      "unit": "個"
    }
  ],
 */

export interface Product {
  id: string;
  title: string;
  content: string;
  description: string;
  category: string;
  imageUrl: string;
  imagesUrl: string[];
  price: number;
  origin_price: number;
  unit: string;
  num: number;
  is_enabled: number; // 1: 上架, 0: 下架
  createTime?: number; // 可選屬性，表示創建時間
  updateTime?: number; // 可選屬性，表示更新時間
  [key: string]: any; // 允許其他任意屬性
  // 這裡可以添加其他屬性
  // 例如：brand, color, size 等等
}
