"use client"

import { useState, useEffect, useCallback } from "react"
import type { FormData } from "./muffer-order-form"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Clock, FlameIcon as Fire, Crown } from "lucide-react"

interface EditMaxStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function EditMaxStep({ formData, updateFormData, nextStep, prevStep }: EditMaxStepProps) {
  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate base price based on selected plan
  const getBasePriceForPlan = useCallback(() => {
    switch (formData.editMaxPlan) {
      case "Short":
        return 1499
      case "Standard":
        return 4999
      case "Premium":
        return 9999
      default:
        return 0
    }
  }, [formData.editMaxPlan])

  // Calculate add-on prices
  const getAddOnPrice = useCallback((addOn: string) => {
    switch (addOn) {
      case "voiceover":
        return 1500
      case "captions":
        return 999
      case "audio":
        // Audio mastering is included in Premium plan
        return formData.editMaxPlan === "Premium" ? 0 : 775
      case "formats":
        return 775
      case "rush":
        if (formData.editMaxPlan === "Short") return 499
        if (formData.editMaxPlan === "Standard") return 999
        if (formData.editMaxPlan === "Premium") return 1999
        return 0
      default:
        return 0
    }
  }, [formData.editMaxPlan])

  // Update total price whenever selections change
  useEffect(() => {
    const basePrice = getBasePriceForPlan()
    const addOnsPrice = formData.addOns.reduce((total, addOn) => {
      return total + getAddOnPrice(addOn)
    }, 0)

    const newTotal = basePrice + addOnsPrice
    setTotalPrice(newTotal)
    updateFormData({ totalPrice: newTotal })
  }, [formData.editMaxPlan, formData.addOns, getBasePriceForPlan, updateFormData, getAddOnPrice])

  const handleAddOnToggle = (addOn: string) => {
    const currentAddOns = [...formData.addOns]

    if (currentAddOns.includes(addOn)) {
      updateFormData({
        addOns: currentAddOns.filter((item) => item !== addOn),
      })
    } else {
      updateFormData({
        addOns: [...currentAddOns, addOn],
      })
    }
  }


  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">EditMax Details</h2>
        <p className="text-gray-600">Select your video duration and add-ons</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Video Duration Needed:</h3>

        <RadioGroup
          value={formData.editMaxPlan}
          onValueChange={(value) => updateFormData({ editMaxPlan: value as FormData["editMaxPlan"] })}
          className="space-y-3"
        >
          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.editMaxPlan === "Short" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="Short" id="Short" className="sr-only" />
            <Label htmlFor="Short" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="font-medium">Short (up to 1 min)</p>
                <p className="text-sm text-gray-500">Quick edits for social media</p>
              </div>
              <div className="font-semibold">₹1499</div>
            </Label>
          </div>

          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.editMaxPlan === "Standard" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="Standard" id="Standard" className="sr-only" />
            <Label htmlFor="Standard" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Fire className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center">
                  <p className="font-medium">Standard (up to 10 min)</p>
                  <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Most Popular
                  </span>
                </div>
                <p className="text-sm text-gray-500">Perfect for YouTube and presentations</p>
              </div>
              <div className="font-semibold">₹4999</div>
            </Label>
          </div>

          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.editMaxPlan === "Premium" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="Premium" id="Premium" className="sr-only" />
            <Label htmlFor="Premium" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Crown className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="font-medium">Premium (up to 30 min)</p>
                <p className="text-sm text-gray-500">Comprehensive editing for longer content</p>
              </div>
              <div className="font-semibold">₹9999</div>
            </Label>
          </div>
        </RadioGroup>

        <div className="pt-4">
          <h3 className="font-medium text-gray-900 mb-3">Select Add-ons (optional):</h3>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="voiceover"
                checked={formData.addOns.includes("voiceover")}
                onCheckedChange={() => handleAddOnToggle("voiceover")}
              />
              <Label htmlFor="voiceover" className="flex-1">
                Voice-over
              </Label>
              <span className="text-sm font-medium">+₹1500</span>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="captions"
                checked={formData.addOns.includes("captions")}
                onCheckedChange={() => handleAddOnToggle("captions")}
              />
              <Label htmlFor="captions" className="flex-1">
                Custom Captions
              </Label>
              <span className="text-sm font-medium">+₹999</span>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="audio"
                checked={formData.addOns.includes("audio") || formData.editMaxPlan === "Premium"}
                onCheckedChange={() => handleAddOnToggle("audio")}
                disabled={formData.editMaxPlan === "Premium"}
              />
              <Label htmlFor="audio" className="flex-1">
                Audio Mastering
                {formData.editMaxPlan === "Premium" && (
                  <span className="ml-2 text-xs text-blue-600">(Included in Premium)</span>
                )}
              </Label>
              <span className="text-sm font-medium">+₹775</span>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="formats"
                checked={formData.addOns.includes("formats")}
                onCheckedChange={() => handleAddOnToggle("formats")}
              />
              <Label htmlFor="formats" className="flex-1">
                Additional Formats (16:9, 9:16, 1:1)
              </Label>
              <span className="text-sm font-medium">+₹775</span>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rush"
                checked={formData.addOns.includes("rush")}
                onCheckedChange={() => handleAddOnToggle("rush")}
              />
              <Label htmlFor="rush" className="flex-1">
                Rush Delivery
              </Label>
              <span className="text-sm font-medium">
                +₹{formData.editMaxPlan === "Short" ? "499" : formData.editMaxPlan === "Standard" ? "999" : "1999"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Price:</span>
            <span className="text-xl font-bold text-blue-600">₹{totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={prevStep} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <Button onClick={nextStep} disabled={!formData.editMaxPlan} className="bg-blue-500 hover:bg-blue-600">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
