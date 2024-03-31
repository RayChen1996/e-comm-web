import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://node-api-wbea.onrender.com/", //https://todolist-kata-xfsx.onrender.com/
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      /* 因為有設定baseUrl的關係，不用填寫完整的 API 網址。
      當呼叫該Function時，是去 https://jsonplaceholder.typicode.com/posts 取得資料 */
      query: () => "products", // https://jsonplaceholder.typicode.com/posts
    }),
    getAllCategories: builder.query({
      query: () => "categories",
    }),
  }),
});

// RTK Query 會自動將 endPoints 內定義的 Function 輸出成 Hook。
// 格式為 use + 定義的 Function 名稱 + Query
export const { useGetAllPostsQuery, useGetAllCategoriesQuery } = postsApi;
