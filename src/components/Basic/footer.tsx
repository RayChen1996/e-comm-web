import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="footer relative bg-secondary-content py-8 text-white">
      <div className="mx-auto flex h-full items-center justify-center">
        <div className="relative">
          <Image
            src="/d’Perfumewhite.png"
            alt="d’Perfume Logo"
            className="h-10 w-auto"
            fill
          />
        </div>
        <p>© {new Date().getFullYear()} d’Perfume. All rights reserved.</p>
      </div>
      <ul className="flex justify-center">
        <li>Product</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
