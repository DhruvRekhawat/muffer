"use client"
import ProductPage from "@/components/sections/ProductPage";
import { editmaxContent as content, themes } from "@/data/product-content";

const Editmax = () => {
  return <ProductPage content={content} theme={themes.editmax} />;
};

export default Editmax;