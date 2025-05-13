"use client"

import type { FormData } from "../muffer-order-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

interface ReviewStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  handleSubmit: () => void
  prevStep: () => void
}

export default function ReviewStep({ formData, updateFormData, handleSubmit, prevStep }: ReviewStepProps) {
  const [errors, setErrors] = useState<{ email?: string; company?: string }>({})

  const validateAndSubmit = () => {
    const newErrors: { email?: string; company?: string } = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      handleSubmit()
    }
  }

  // Helper function to get service details
  const getServiceDetails = () => {
    switch (formData.service) {
      case "EditMax":
        return `EditMax - ${formData.editMaxPlan}`
      case "AdMax":
        return `AdMax - ${formData.adMaxStyle}`
      case "ContentMax":
        return `ContentMax - ${formData.contentMaxLength}`
      default:
        return ""
    }
  }

  // Helper function to get add-ons list
  const getAddOns = () => {
    if (formData.wantsSubscription && formData.subscriptionBundle) {
      return "All add-ons included in bundle"
    }

    if (formData.addOns.length === 0) {
      return "None"
    }

    const addOnNames: Record<string, string> = {
      voiceover: "Voice-over",
      captions: "Custom Captions",
      audio: "Audio Mastering",
      formats: "Additional Formats",
      rush: "Rush Delivery",
      script: "Custom Script",
      hooks: "Multiple Hook Variations",
      creator: "Additional Creator",
      graphics: "Advanced Motion Graphics",
      thumbnails: "Professional Thumbnails",
    }

    return formData.addOns.map((addOn) => addOnNames[addOn] || addOn).join(", ")
  }

  // Get subscription details if applicable
  const getSubscriptionDetails = () => {
    if (!formData.wantsSubscription) {
      return "One-time order"
    }

    switch (formData.subscriptionBundle) {
      case "Starter":
        return "Starter Bundle - ₹9,999/month"
      case "Growth":
        return "Growth Bundle - ₹19,999/month"
      case "Pro":
        return "Pro Bundle - ₹34,999/month"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Review Your Order</h2>
        <p className="text-gray-600">Please confirm your details before proceeding to payment</p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <h3 className="font-medium text-gray-900">Order Summary</h3>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-500">Selected Service:</div>
            <div className="font-medium">{getServiceDetails()}</div>

            <div className="text-gray-500">Add-ons:</div>
            <div className="font-medium">{getAddOns()}</div>

            <div className="text-gray-500">Subscription:</div>
            <div className="font-medium">{getSubscriptionDetails()}</div>

            <div className="text-gray-500 col-span-2 pt-2"></div>

            <div className="text-gray-900 font-medium">Total Price:</div>
            <div className="text-blue-600 font-bold text-lg">
              {formData.wantsSubscription
                ? `₹${
                    formData.subscriptionBundle === "Starter"
                      ? "9,999"
                      : formData.subscriptionBundle === "Growth"
                        ? "19,999"
                        : "34,999"
                  }/month`
                : `₹${formData.totalPrice.toLocaleString()}`}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Customer Information</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="review-name">Name</Label>
              <Input id="review-name" value={formData.name} readOnly className="bg-gray-50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="review-phone">Phone Number</Label>
              <Input id="review-phone" value={formData.phone} readOnly className="bg-gray-50" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="review-email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="review-email"
                value={formData.email}
                onChange={(e) => updateFormData({ email: e.target.value })}
                placeholder="Enter your email"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="review-company">Brand/Company</Label>
              <Input
                id="review-company"
                value={formData.company}
                onChange={(e) => updateFormData({ company: e.target.value })}
                placeholder="Enter your company name (optional)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={prevStep} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <Button onClick={validateAndSubmit} className="bg-blue-500 hover:bg-blue-600">
          Proceed to Pay
        </Button>
      </div>
    </div>
  )
}
