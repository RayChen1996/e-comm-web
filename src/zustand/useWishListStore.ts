import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/schema/product";

interface WishState {
  wishList: Product[];
  clear: () => void;
  remove: (item: Product) => void;
  add: (item: Product) => void;
}

export const useWishListStore = create<WishState>()(
  persist(
    (set) => ({
      wishList: [],
      clear: () => set({ wishList: [] }),
      remove: (item) =>
        set((state) => ({
          wishList: state.wishList.filter(
            (wishItem) => wishItem.id !== item.id,
          ),
        })),
      add: (item) =>
        set((state) => ({
          wishList: [...state.wishList, item],
        })),
    }),
    {
      name: "wishlist-storage", // localStorage 的 key
      partialize: (state) => ({
        wishList: state.wishList,
      }),
    },
  ),
);
