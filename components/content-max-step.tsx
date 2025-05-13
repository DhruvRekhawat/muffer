"use client"

import { useState, useEffect } from "react"
import type { FormData } from "../muffer-order-form"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Clock, FlameIcon as Fire, Crown } from "lucide-react"

interface ContentMaxStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function ContentMaxStep({ formData, updateFormData, nextStep, prevStep }: ContentMaxStepProps) {
  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate base price based on selected length
  const getBasePriceForLength = () => {
    switch (formData.contentMaxLength) {
      case "Short":
        return 4999
      case "Standard":
        return 9999
      case "Premium":
        return 19999
      default:
        return 0
    }
  }

  // Calculate add-on prices
  const getAddOnPrice = (addOn: string) => {
    switch (addOn) {
      case "graphics":
        return 2250
      case "thumbnails":
        return 999
      case "formats":
        return 775
      case "voiceover":
        // Voice-over is included in Premium plan
        return formData.contentMaxLength === "Premium" ? 0 : 1500
      default:
        return 0
    }
  }

  // Update total price whenever selections change
  useEffect(() => {
    const basePrice = getBasePriceForLength()
    const addOnsPrice = formData.addOns.reduce((total, addOn) => {
      return total + getAddOnPrice(addOn)
    }, 0)

    const newTotal = basePrice + addOnsPrice
    setTotalPrice(newTotal)
    updateFormData({ totalPrice: newTotal })
  }, [formData.contentMaxLength, formData.addOns])

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
        <h2 className="text-xl font-bold text-gray-900">ContentMax Details</h2>
        <p className="text-gray-600">Select your video length and add-ons</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Choose Video Length:</h3>

        <RadioGroup
          value={formData.contentMaxLength}
          onValueChange={(value) => updateFormData({ contentMaxLength: value as FormData["contentMaxLength"] })}
          className="space-y-3"
        >
          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.contentMaxLength === "Short" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="Short" id="ContentShort" className="sr-only" />
            <Label htmlFor="ContentShort" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="font-medium">Short (1-3 min)</p>
                <p className="text-sm text-gray-500">Perfect for social media content</p>
              </div>
              <div className="font-semibold">₹4999</div>
            </Label>
          </div>

          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.contentMaxLength === "Standard" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="Standard" id="ContentStandard" className="sr-only" />
            <Label htmlFor="ContentStandard" className="flex flex-1 cursor-pointer items-center space-x-3">
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
                <p className="text-sm text-gray-500">Ideal for YouTube and presentations</p>
              </div>
              <div className="font-semibold">₹9999</div>
            </Label>
          </div>

          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.contentMaxLength === "Premium" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="Premium" id="ContentPremium" className="sr-only" />
            <Label htmlFor="ContentPremium" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Crown className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="font-medium">Premium (10-30 min)</p>
                <p className="text-sm text-gray-500">Comprehensive content for in-depth topics</p>
              </div>
              <div className="font-semibold">₹19,999</div>
            </Label>
          </div>
        </RadioGroup>

        <div className="pt-4">
          <h3 className="font-medium text-gray-900 mb-3">Select Add-ons (optional):</h3>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="graphics"
                checked={formData.addOns.includes("graphics")}
                onCheckedChange={() => handleAddOnToggle("graphics")}
              />
              <Label htmlFor="graphics" className="flex-1">
                Advanced Motion Graphics
              </Label>
              <span className="text-sm font-medium">+₹2250</span>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="thumbnails"
                checked={formData.addOns.includes("thumbnails")}
                onCheckedChange={() => handleAddOnToggle("thumbnails")}
              />
              <Label htmlFor="thumbnails" className="flex-1">
                Professional Thumbnails
              </Label>
              <span className="text-sm font-medium">+₹999</span>
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
                id="voiceover"
                checked={formData.addOns.includes("voiceover") || formData.contentMaxLength === "Premium"}
                onCheckedChange={() => handleAddOnToggle("voiceover")}
                disabled={formData.contentMaxLength === "Premium"}
              />
              <Label htmlFor="voiceover" className="flex-1">
                Professional Voice-over
                {formData.contentMaxLength === "Premium" && (
                  <span className="ml-2 text-xs text-blue-600">(Included in Premium)</span>
                )}
              </Label>
              <span className="text-sm font-medium">+₹1500</span>
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

        <Button onClick={nextStep} disabled={!formData.contentMaxLength} className="bg-blue-500 hover:bg-blue-600">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
