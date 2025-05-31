"use client";
import React, { useState } from "react";
import { useGetAllPostsQuery, useGetAllCategoriesQuery } from "@/hook/useApi";
import {
  Control,
  Controller,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
/** - 後台-產品列表 */
export default function Page() {
  return (
    <div>
      <button className="btn btn-primary text-white">新增</button>
    </div>
  );
}
