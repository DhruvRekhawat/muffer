"use client"
import type { FormData } from "./muffer-order-form"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

interface SubscriptionStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function SubscriptionStep({ formData, updateFormData, nextStep, prevStep }: SubscriptionStepProps) {
  const handleSubscriptionChoice = (value: string) => {
    const wantsSubscription = value === "yes"
    updateFormData({
      wantsSubscription,
      // Reset bundle if they don't want a subscription
      subscriptionBundle: wantsSubscription ? formData.subscriptionBundle : "",
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Subscription Options</h2>
        <p className="text-gray-600">Get regular content at discounted prices</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">
          Are you looking for regular content delivery at discounted prices?
        </h3>

        <RadioGroup
          value={formData.wantsSubscription ? "yes" : "no"}
          onValueChange={handleSubscriptionChoice}
          className="space-y-3"
        >
          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.wantsSubscription ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="yes" id="yes-subscription" className="sr-only" />
            <Label htmlFor="yes-subscription" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="space-y-1">
                <p className="font-medium">Yes, show me discounted monthly bundles.</p>
                <p className="text-sm text-gray-500">Save up to 35% with our monthly packages</p>
              </div>
            </Label>
          </div>

          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${!formData.wantsSubscription && formData.wantsSubscription !== undefined ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="no" id="no-subscription" className="sr-only" />
            <Label htmlFor="no-subscription" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="space-y-1">
                <p className="font-medium">No, this is a one-time or occasional order.</p>
                <p className="text-sm text-gray-500">Continue with your current selection</p>
              </div>
            </Label>
          </div>
        </RadioGroup>

        {formData.wantsSubscription && (
          <div className="pt-4 space-y-4">
            <h3 className="font-medium text-gray-900">Select a Monthly Bundle:</h3>

            <RadioGroup
              value={formData.subscriptionBundle}
              onValueChange={(value) => updateFormData({ subscriptionBundle: value as FormData["subscriptionBundle"] })}
              className="space-y-4"
            >
              <div
                className={`relative rounded-lg border p-4 transition-all
                ${formData.subscriptionBundle === "Starter" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              >
                <RadioGroupItem value="Starter" id="starter" className="sr-only" />
                <Label htmlFor="starter" className="cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Starter Bundle</div>
                    <div className="font-bold text-blue-600">₹9,999/month</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    4 Short-form (up to 3 min each) OR 1 Long-form (up to 10 min)
                  </div>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <Check className="mr-1 h-4 w-4" /> Save ~20%
                  </div>
                </Label>
              </div>

              <div
                className={`relative rounded-lg border p-4 transition-all
                ${formData.subscriptionBundle === "Growth" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              >
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </div>
                <RadioGroupItem value="Growth" id="growth" className="sr-only" />
                <Label htmlFor="growth" className="cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Growth Bundle</div>
                    <div className="font-bold text-blue-600">₹19,999/month</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">4 Long-form videos (3-5 min each) + 2 AdMax Ads</div>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <Check className="mr-1 h-4 w-4" /> Save ~30%
                  </div>
                </Label>
              </div>

              <div
                className={`relative rounded-lg border p-4 transition-all
                ${formData.subscriptionBundle === "Pro" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              >
                <RadioGroupItem value="Pro" id="pro" className="sr-only" />
                <Label htmlFor="pro" className="cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Pro Bundle</div>
                    <div className="font-bold text-blue-600">₹34,999/month</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    8 Long-form videos (up to 10 min) + 4 AdMax Creator Ads
                  </div>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <Check className="mr-1 h-4 w-4" /> Save ~35%
                  </div>
                </Label>
              </div>
            </RadioGroup>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md text-sm text-gray-700">
              <p>Bundles automatically include all necessary add-ons for a complete solution.</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={prevStep} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <Button
          onClick={nextStep}
          disabled={
            formData.wantsSubscription === undefined || (formData.wantsSubscription && !formData.subscriptionBundle)
          }
          className="bg-blue-500 hover:bg-blue-600"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
