import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface SelectedProduct {
  id: number;
  count: number;
  product: Product;
}

interface Props {
  selectedProduct: SelectedProduct;
  handleIncriment: (product: Product) => void;
  handleDecrement: (product: Product) => void;
}

const CartProduct: React.FC<Props> = ({
  selectedProduct,
  handleIncriment,
  handleDecrement,
}) => {
  console.log("asd", selectedProduct);
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">
        {selectedProduct?.product?.title}
      </h2>
      <img src={selectedProduct?.product?.thumbnail} className="w-[10rem]" />
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-700 mb-4">
          {selectedProduct?.product?.description}
        </p>
        <div className=" self-end">
          {" "}
          <p className="text-sm text-gray-700">
            Quantity: {selectedProduct?.count}
          </p>
          <span
            className="cursor-pointer text-[1.5rem]"
            onClick={() => handleIncriment(selectedProduct.product)}
          >
            +
          </span>
          <span
            className="cursor-pointer text-[1.5rem]"
            onClick={() => handleDecrement(selectedProduct.product)}
          >
            -
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
