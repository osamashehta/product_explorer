"use server";

import apiServiceCall from "./apiServerCall";

export const getProducts = async (q?: string, sort?: string) => {
  const params = new URLSearchParams();

  if (q) params.append("q", q);
  if (sort) {
    params.append("sortBy", "price");
    params.append("order", sort);
  }

  const url = `products/search${params.toString() ? `?${params.toString()}` : ""}`;

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
