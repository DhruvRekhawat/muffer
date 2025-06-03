"use client"
import ProductPage from "@/components/sections/ProductPage";
import { contentmaxContent as content, themes } from "@/data/product-content";

const Contentmax = () => {
  return <ProductPage content={content} theme={themes.contentmax} />;
};

export default Contentmax;