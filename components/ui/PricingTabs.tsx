"use client"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PayAsYouGoPricing from "./PayAsYouGo";
import MonthlyBundles from "./monthlyBundles";

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("pay-as-you-go");

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Tabs 
        defaultValue="pay-as-you-go" 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
          <TabsTrigger value="pay-as-you-go">Pay-As-You-Go</TabsTrigger>
          <TabsTrigger value="monthly-bundles">Monthly Bundles</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pay-as-you-go" className="space-y-12">
          <PayAsYouGoPricing activeTab={activeTab === "pay-as-you-go"} />
        </TabsContent>
        
        <TabsContent value="monthly-bundles">
          <MonthlyBundles activeTab={activeTab === "monthly-bundles"} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PricingTabs;
