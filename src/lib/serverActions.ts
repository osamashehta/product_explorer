"use server";

import apiServiceCall from "./apiServerCall";

export const getProducts = async (q?: string, sort?: string) => {
  const url = `products/search${q ? `?q=${q}` : ""}${
    sort ? `&sortBy=price&order=${sort}` : ""
  }`;
  try {
    const products = await apiServiceCall({ url });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const getProductDetails = async (id: string) => {
  try {
    const data = await apiServiceCall({ url: `products/${id}` });
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
