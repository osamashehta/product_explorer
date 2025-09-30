"use server";

import apiServiceCall from "./apiServerCall";

export const getProducts = async () => {
  try {
    const products = await apiServiceCall({ url: "products" });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
