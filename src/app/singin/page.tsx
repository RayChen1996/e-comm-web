"use client";
import React from "react";
import Image from "next/image";
import LoginImg from "@/../../public/login1.jpg";

export default function Page() {
  return (
    <div className="container mx-auto">
      <section className="grid min-h-screen grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <div className="relative col-span-1 h-full w-full">
          <Image
            src={LoginImg}
            alt="Login Image"
            fill
            className="object-cover"
          />
        </div>

        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="mb-4 text-2xl font-bold">Log in</h2>
          <form>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium" htmlFor="email">
                帳號
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded border p-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-medium"
                htmlFor="password"
              >
                密碼
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded border p-2"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 p-2 text-white transition duration-200 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
