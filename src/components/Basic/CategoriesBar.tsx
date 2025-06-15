import React from "react";
import { categories } from "@/constant/categories";

/** - 類別 */
export default function CategoriesBar() {
  return (
    <section className="max-w-4l bg-primary p-4 text-white">
      <div className="flex items-center gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center p-4"
          >
            <span className="cursor-pointer font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
