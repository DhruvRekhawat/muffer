"use client"
import ProductPage from "@/components/sections/ProductPage";
import { admaxContent as content, themes } from "@/data/product-content";

const Admax = () => {
  return <ProductPage content={content} theme={themes.admax} />;
};

export default Admax;