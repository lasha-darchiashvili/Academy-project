"use server";
import React from "react";
import { redirect } from "next/navigation";
import ProductItem from "./components/productItem";

export async function generateStaticParams() {
  const products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  return products.products.map((product) => ({
    id: product.id,
  }));
}

export default async function page({ params }) {
  return <ProductItem id={params.productid} />;
}
