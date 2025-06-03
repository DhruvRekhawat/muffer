"use client";
import ProductPage from "@/components/sections/ProductPage";
import {
  subscriptionsContent as content,
  themes,
} from "@/data/product-content";

const Subscriptions = () => {
  return <ProductPage content={content} theme={themes.subscriptions} />;
};

export default Subscriptions;
