import React from "react";
import Product from "../components/Product";

export default function Products() {
  return (
    <div class="grow flex justify-center">
      <div className="overflow-y-scroll h-[35rem] w-[124rem] mt-[1rem]">
        <div class="grid grid-cols-5 gap-4 p-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}
