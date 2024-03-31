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
/** - 後台-產品列表 */
export default function Page() {
  const {
    data,
    error,
    isLoading: queryProductsLoading,
  } = useGetAllPostsQuery("");
  const {
    data: categoryData,
    error: err,
    isLoading: queryCategoryLoading,
  } = useGetAllCategoriesQuery("");
  const [imageSrc, setImageSrc] = useState([]);

  console.log(data);
  // if (data) {
  //   data.forEach((item) => {
  //     setImageSrc(item.image);
  //   });
  // }

  console.log(imageSrc);
  console.log(categoryData);
  const _pressOpen = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <h1>新增產品</h1>
      <button onClick={_pressOpen} className=" btn btn-primary text-white ">
        新增
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> 新增產品!</h3>
          <p className="py-4">
            <Controller
              name="description"
              render={({ field, fieldState: { error } }) => (
                <>
                  <label htmlFor="title">產品名稱</label>
                  <input
                    className=" input input-bordered border"
                    type="text"
                    placeholder="請輸入產品名稱"
                    name=""
                    id="title"
                  />
                </>
              )}
            />
          </p>
          <p className="py-4">
            {" "}
            <label>類別</label>
            <select className=" select select-bordered ">
              {categoryData?.map((item, idx) => (
                <option key={idx} value={item.category_name}>
                  {item.category_name}
                </option>
              ))}
            </select>
          </p>
          <p className="py-4">
            {" "}
            <label htmlFor="photo">產品圖片</label>
            <select className=" select select-bordered ">
              <option
                value={
                  "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              >
                網址一
              </option>
              <option
                value={
                  "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&q=80&w=1958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              >
                網址二
              </option>
              <option
                value={
                  "https://images.unsplash.com/photo-1544468266-6a8948003cd7?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              >
                網址三
              </option>
              <option
                value={
                  "https://images.unsplash.com/photo-1578996834254-13d1b661a5ed?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              >
                網址四
              </option>
              <option
                value={
                  "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              >
                網址五
              </option>
            </select>
          </p>{" "}
          <p className="py-4">
            <label htmlFor="is_enabled">是否啟用</label>
            <input type="checkbox" name="" id="is_enabled" />
          </p>{" "}
          <p className="py-4">
            <label htmlFor="title">產品原價</label>
            <input
              className=" input input-bordered border"
              type="number"
              name=""
              placeholder="請輸入產品原價"
              id="title"
            />
          </p>{" "}
          <p className="py-4"></p>{" "}
          <p className="py-4">
            <label htmlFor="title">產品折扣價</label>
            <input
              placeholder="請輸入產品折扣價"
              className=" input input-bordered border"
              type="number"
              name=""
              id="title"
            />
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() => {
                  //
                }}
                className="btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>是否啟用</th>
              <th>產品名稱</th>
              <th>原始價格</th>
              <th>特價</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
