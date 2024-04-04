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
  const {
    data,
    error,
    refetch,
    status,
    isLoading: queryProductsLoading,
  } = useGetAllPostsQuery("");
  const {
    data: categoryData,
    error: err,
    isLoading: queryCategoryLoading,
  } = useGetAllCategoriesQuery("");
  const [title, setTitle] = useState("新增");

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("木質");
  const [productImgSrc, setProductImgSrc] = useState(
    "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&q=80&w=1958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const [productEnable, setProductEnable] = useState(0);
  const [productOriginPrice, setProductOriginPrice] = useState("");
  const [productDiscountPrice, setProductDiscountPrice] = useState("");
  const [productId, setProductId] = useState("");

  const [imageSrc, setImageSrc] = useState([]);

  const form = useForm({
    resolver: zodResolver({
      id: true,
      type: true,
      materialId: true,
      image: true,
      description: true,
      machiningTypeId: true,
      machiningSubtypeId: true,
      accuracy: true,
      standardIds: true,
    }),
    defaultValues: {},
    shouldUseNativeValidation: true,
  });

  const _pressOpen = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleDeleteProductFromId = (id: number) => {
    const confirmDelete = window.confirm("確定要刪除這個產品嗎？");
    if (confirmDelete) {
      fetch(`https://node-api-wbea.onrender.com/products/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            refetch();

            // 在這裡處理刪除成功後的操作
          } else {
            console.error("刪除失敗");
          }
        })
        .catch((error) => console.error("刪除失敗:", error));
    }
  };
  const handleCheckboxChange = (id: number) => {
    // alert(id);
  };

  const handleNewProduct = () => {
    //
    const uuid = uuidv4();

    fetch("https://node-api-wbea.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid,
        category: productCategory,
        image:
          "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&q=80&w=1958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        is_enabled: productEnable,
        origin_price: productOriginPrice,
        price: productDiscountPrice,
        title: productName,
        unit: "30ml",
      }),
    })
      .then((data) => {
        refetch();
        // 在這裡處理新增成功後的操作
      })
      .catch((error) => console.error("新增失敗:", error));
  };

  const handleUpdateProduct = (id: string) => {
    //
    const uuid = uuidv4();

    fetch("https://node-api-wbea.onrender.com/products/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid,
        category: productCategory,
        image:
          "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&q=80&w=1958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        is_enabled: productEnable,
        origin_price: productOriginPrice,
        price: productDiscountPrice,
        title: productName,
        unit: "30ml",
      }),
    })
      .then((data) => {
        refetch();
        // 在這裡處理新增成功後的操作
      })
      .catch((error) => console.error("修改失敗:", error));
  };
  const handleOpenEditModal = (product: any) => {
    setTitle("修改");
    setProductId(product.id);
    setProductName(product.title);

    setProductCategory(product.category);
    setProductImgSrc(product.image);
    setProductEnable(product.is_enabled);
    setProductOriginPrice(product.origin_price);
    setProductDiscountPrice(product.price);

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
          <h3 className="font-bold text-lg"> {title}產品!</h3>
          <p className="py-4">
            <label htmlFor="title">產品名稱</label>
            <input
              className=" input input-bordered border"
              type="text"
              placeholder="請輸入產品名稱"
              name=""
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              id="title"
            />
            {/* <Controller
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
            /> */}
          </p>
          <p className="py-4">
            {" "}
            <label>類別</label>
            <select
              onChange={(e) => {
                setProductCategory(e.target.value);
              }}
              className=" select select-bordered "
            >
              {categoryData?.map((item: any, idx: number) => (
                <option key={idx} value={item.category_name}>
                  {item.category_name}
                </option>
              ))}
            </select>
          </p>
          <p className="py-4">
            {" "}
            <label htmlFor="photo">產品圖片</label>
            <select
              value={productImgSrc}
              onChange={(e) => {
                setProductImgSrc(e.target.value);
              }}
              className=" select select-bordered "
            >
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
            <input
              onChange={(e) => {
                if (e.target.checked) {
                  setProductEnable(1);
                } else {
                  setProductEnable(0);
                }
                //
              }}
              checked={productEnable === 1}
              type="checkbox"
              name=""
              id="is_enabled"
            />
          </p>{" "}
          <p className="py-4">
            <label htmlFor="title">產品原價</label>
            <input
              onChange={(e) => {
                setProductOriginPrice(e.target.value);
              }}
              className=" input input-bordered border"
              type="number"
              value={productOriginPrice}
              name=""
              placeholder="請輸入產品原價"
              id="title"
            />
          </p>{" "}
          <p className="py-4"></p>{" "}
          <p className="py-4">
            <label htmlFor="title">產品折扣價</label>
            <input
              value={productDiscountPrice}
              onChange={(e) => {
                setProductDiscountPrice(e.target.value);
              }}
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
                  if (title === "新增") {
                    handleNewProduct();
                  } else {
                    handleUpdateProduct(productId);
                  }
                }}
                className="btn"
              >
                {title}
              </button>
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
              <th>修改</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product: any, index: number) => (
              <tr key={index}>
                <td>
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      checked={product.is_enabled === 1}
                      onChange={() => handleCheckboxChange(product.id)}
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={product.image}
                          alt="Product Image"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.title}</div>
                      <div className="text-sm opacity-50">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className=" ">{product.origin_price}</span>
                </td>
                <td>
                  <span className=" ">{product.price}</span>
                </td>
                <th>
                  <button
                    onClick={() => handleOpenEditModal(product)}
                    className="btn btn-info"
                  >
                    修改
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDeleteProductFromId(product.id);
                    }}
                    className="btn btn-warning"
                  >
                    刪除
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
