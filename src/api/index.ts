import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    // 定義你的端點
    // 例如：
    fetchPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useFetchPostsQuery } = api;
