import React from "react";
import Image from "next/image";
import LoginImg from "@/../../public/index1.jpg";

export default function Banner() {
  return (
    <section>
      <div>
        <section>
          <div className="relative col-span-1 aspect-video h-full w-full">
            <Image
              src={LoginImg}
              alt="Login Image"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
