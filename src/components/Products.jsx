import React from "react";
import { Product } from "./Product";

const products = [
  {
    id: Math.random(),
    productName: "SAMSUNG Galaxy S23 Ultra 5G ",
    imgUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/l/o/-original-imagmg6gzjf7gggt.jpeg?q=70",
    originalPrice: 97000,
    currency: "₹",
    discountedPrice: 95000
  },

  {
    id: Math.random(),
    productName: "Mi 3i 10000 mAh Power Bank",
    imgUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/x/1/h/-original-imagq46vh6chuquz.jpeg?q=70",
    originalPrice: 9999,
    currency: "₹",
    discountedPrice: 7999
  },
  {
    id: Math.random(),
    productName: "HP 15s (2023) Athlon Dual Core",
    imgUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/6/3/f/-original-imagg56hpyggfqzz.jpeg?q=70",
    originalPrice: 62000,
    currency: "₹",
    discountedPrice: 60000
  },
  {
    id: Math.random(),
    productName: "Wireless Optical Mouse",
    imgUrl:
      "https://rukminim2.flixcart.com/image/612/612/kt4ozgw0/mouse/a/d/l/toad-13-portronics-original-imag6jqawv8zhpum.jpeg?q=70",
    originalPrice: 4999,
    currency: "₹",
    discountedPrice: 3999
  },
  {
    id: Math.random(),
    productName: "boAt Airdopes 161",
    imgUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/d/r/-original-imagpgwsm6zgtsrj.jpeg?q=70",
    originalPrice: 4999,
    currency: "₹",
    discountedPrice: 3999
  },
  {
    id: Math.random(),
    productName: "Fastrack Revoltt FS1",
    imgUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/g/i/i/-original-imagrg4anvzh2hff.jpeg?q=70",
    originalPrice: 1999,
    currency: "₹",
    discountedPrice: 1799
  }
];

const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
