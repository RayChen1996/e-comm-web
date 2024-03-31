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
  const { data, error, isLoading } = useGetAllPostsQuery("");
  const { category } = useQuerySearchParams();

  if (isLoading || !data)
    return <span className=" loading loading-spinner"></span>;

  const filteredData = category
    ? data.filter((product: any) => product.category === category)
    : data;

  console.log("filteredData ", filteredData);

  function ProductGrid({ children }: { children: React.ReactNode }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    );
  }

  return (
    <>
      <Suspense>
        <Category />
      </Suspense>

      <div className=" container md:w1/2 w-2/3 ">
        <ProductGrid>
          {filteredData.map((product: any, index: any) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductGrid>
      </div>
      <RememberSubscriptInfo />
    </>
  );
}

function RememberSubscriptInfo() {
  return (
    <div className=" h-72  w-full   relative">
      <Image alt="" fill src={bg} objectFit="cover" />
      <div className="    absolute bottom-3 left-40 ">
        <h3 className=" font-bold text-[#8D8D8D]">記得</h3>
        <h3 className=" font-bold text-[#8D8D8D]">訂閱以獲取更多資訊！</h3>
        <input
          className=" border my-2 p-2 mx border-primary-content"
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
        <ul className=" flex flex-row gap-3 h-full justify-center items-center ">
          {data.map((category: any) => (
            <li
              onClick={() => {
                onSwitchCategory(category.category_name);
              }}
              className=" cursor-pointer text-white font-bold "
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
    <div className=" flex justify-center items-center flex-col mt-4   ">
      <figure className=" w-28  h-28 lg:w-52 lg:h-52 relative ">
        <Image alt="" src={image} fill />
      </figure>
      <div className=" w-full ml-10 flex flex-col justify-center">
        <span className=" text-[#838383]  mt-3">{title}</span>
        <span>{category}</span>
        <div className="flex gap-3 ">
          <span>
            {numbro(price).format({
              thousandSeparated: true,
              prefix: "NT$\u00A0",
            })}
          </span>
          <span className="line-through text-gray-500">
            {numbro(origin_price).format({
              thousandSeparated: true,
              prefix: "NT$\u00A0",
            })}
          </span>
        </div>
        <div className=" flex  gap-3">
          <span className="cursor-pointer material-icons flex h-full items-center justify-center bg-[#fff] font-bold text-[#916019]">
            favorite
          </span>
          <span className=" cursor-pointer material-icons flex h-full items-center justify-center bg-[#fff] font-bold text-[#916019]">
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
