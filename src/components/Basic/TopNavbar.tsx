"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { House, ShoppingCart, Heart, User } from "lucide-react";

/** - 導覽 */
export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar relative z-10 flex h-20 w-full items-center justify-between bg-white sm:container">
      <div className="flex items-center">
        <Link href={"/"} className="border-none">
          <Image alt="" src={"/d’Perfume.png"} width={150} height={50} />
        </Link>
      </div>

      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="block px-2 py-1 focus:outline-none lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-7`}
        >
          <li className="cursor-pointer">
            <Link href={"/products"} className="flex items-center border-none">
              <House className="mr-2 inline-block" />
              <span>Product</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/singin"} className="flex items-center border-none">
              <User className="mr-2 inline-block" />
              <span>log In</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"} className="flex items-center border-none">
              <Heart className="mr-2 inline-block" />

              <span>Wishlist</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"} className="flex items-center border-none">
              <ShoppingCart className="mr-2 inline-block" />
              <span>Cart</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/Back-Stage"} className="border-none">
              後台
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
