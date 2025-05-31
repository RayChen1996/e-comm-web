"use client";
import React, { useEffect, useState } from "react";
import { useGetAllPostsQuery, useGetAllCategoriesQuery } from "@/hook/useApi";
import Image from "next/image";
import numbro from "numbro";
import { useRouter, usePathname } from "next/navigation";
import useCreateQueryUrl, { combinSearchUrl } from "@/hook/useCreateQueryUrl";
import { useQuerySearchParams } from "@/hook/useQueryParams";
import { Suspense } from "react";
import bg from "../../../public/anis-m-WnVrO-DvxcE-unsplash.jpg";
export default function Product() {
  // const { category } = useQuerySearchParams();

  function ProductGrid({ children }: { children: React.ReactNode }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    );
  }

  return <Suspense></Suspense>;
}

function RememberSubscriptInfo() {
  return (
    <div className="relative h-72 w-full">
      <Image alt="" fill src={bg} objectFit="cover" />
      <div className="absolute bottom-3 left-40">
        <h3 className="font-bold text-[#8D8D8D]">記得</h3>
        <h3 className="font-bold text-[#8D8D8D]">訂閱以獲取更多資訊！</h3>
        <input
          className="mx my-2 border border-primary-content p-2"
          type="email"
          placeholder="Your email address"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

function Category() {
  const { data, error, isLoading } = useGetAllCategoriesQuery("");

  const { replace } = useRouter();
  const pathname = usePathname();
  const { category } = useQuerySearchParams();

  console.log("category", category);
  const [active, setActive] = useState("");
  const onSwitchCategory = (categoryName: string) => {
    replace(combinSearchUrl(pathname, [`category=${categoryName}`]));
  };

  return (
    <div className="h-10 w-full bg-secondary-content">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: </div>
      ) : (
        <ul className="flex h-full flex-row items-center justify-center gap-3">
          {data.map((category: any) => (
            <li
              onClick={() => {
                onSwitchCategory(category.category_name);
              }}
              className="cursor-pointer font-bold text-white"
              key={category.id}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface ProductProp {
  title: string;
  id: string;
  is_enabled: number;
  category: string;
  origin_price: string;
  price: string;
  unit: string;
  image: string;
}

function ProductCard({ product }: { product: ProductProp }) {
  const { id, category, image, origin_price, price, title, unit } = product;

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <figure className="relative h-28 w-28 lg:h-52 lg:w-52">
        <Image alt="" src={image} fill />
      </figure>
      <div className="ml-10 flex w-full flex-col justify-center">
        <span className="mt-3 text-[#838383]">{title}</span>
        <span>{category}</span>
        <div className="flex gap-3">
          <span>
            {numbro(price).format({
              thousandSeparated: true,
              prefix: "NT$\u00A0",
            })}
          </span>
          <span className="text-gray-500 line-through">
            {numbro(origin_price).format({
              thousandSeparated: true,
              prefix: "NT$\u00A0",
            })}
          </span>
        </div>
        <div className="flex gap-3">
          <span className="material-icons flex h-full cursor-pointer items-center justify-center bg-[#fff] font-bold text-[#916019]">
            favorite
          </span>
          <span className="material-icons flex h-full cursor-pointer items-center justify-center bg-[#fff] font-bold text-[#916019]">
            shopping_cart
          </span>

          {/* <span className="cursor-pointer material-icons flex h-full items-center justify-center bg-[#fff] font-bold text-[#145571]">
            favorite_border
          </span> */}
        </div>
      </div>
    </div>
  );
}
