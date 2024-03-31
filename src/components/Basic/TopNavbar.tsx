"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative flex justify-between items-center z-10 navbar h-20 bg-white w-full">
      <div className="flex items-center">
        <Link href={"/"} className="btn border-none">
          <Image alt="" src={"/d’Perfume.png"} width={150} height={50} />
        </Link>
      </div>

      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="block lg:hidden px-2 py-1 focus:outline-none"
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
          } lg:flex lg:gap-2 lg:items-center`}
        >
          <li className="cursor-pointer">
            <Link href={"/products"} className="btn border-none">
              Product
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"} className="btn border-none">
              Log In
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"} className="btn border-none">
              Wishlist
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"} className="btn border-none">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
