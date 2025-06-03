"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, ArrowRight, Film, Users } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import type { FormData } from "./muffer-order-form"

interface AdMaxStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function AdMaxStep({ formData, updateFormData, nextStep, prevStep }: AdMaxStepProps) {
  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate base price based on selected style - now memoized with useCallback
  const getBasePriceForStyle = useCallback(() => {
    switch (formData.adMaxStyle) {
      case "Stock":
        return 3999
      case "UGC":
        return 7499
      default:
        return 0
    }
  }, [formData.adMaxStyle]) // Only recreate when adMaxStyle changes

  // Calculate add-on prices
  const getAddOnPrice = (addOn: string) => {
    switch (addOn) {
      case "script":
        return 999
      case "voiceover":
        return 1500
      case "hooks":
        return 1499
      case "creator":
        return 3500
      default:
        return 0
    }
  }

  // Update total price whenever selections change
  useEffect(() => {
    const basePrice = getBasePriceForStyle()
    const addOnsPrice = formData.addOns.reduce((total, addOn) => {
      return total + getAddOnPrice(addOn)
    }, 0)

    const newTotal = basePrice + addOnsPrice
    setTotalPrice(newTotal)
    updateFormData({ totalPrice: newTotal })
  }, [formData.adMaxStyle, formData.addOns, updateFormData, getBasePriceForStyle])

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
        <h2 className="text-xl font-bold text-gray-900">AdMax Details</h2>
        <p className="text-gray-600">Select your ad style and preferences</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Ad Style Required:</h3>

        <RadioGroup
          value={formData.adMaxStyle}
          onValueChange={(value) => updateFormData({ adMaxStyle: value as FormData["adMaxStyle"] })}
          className="space-y-3"
        >
          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.adMaxStyle === "Stock" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="Stock" id="Stock" className="sr-only" />
            <Label htmlFor="Stock" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Film className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="font-medium">Stock Footage Ad</p>
                <p className="text-sm text-gray-500">Professional ad using stock footage</p>
              </div>
              <div className="font-semibold">₹3999</div>
            </Label>
          </div>

          <div
            className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
            ${formData.adMaxStyle === "UGC" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
          >
            <RadioGroupItem value="UGC" id="UGC" className="sr-only" />
            <Label htmlFor="UGC" className="flex flex-1 cursor-pointer items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center">
                  <p className="font-medium">Creator/UGC Ad</p>
                  <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Most Popular
                  </span>
                </div>
                <p className="text-sm text-gray-500">Authentic creator-style content</p>
              </div>
              <div className="font-semibold">₹7499</div>
            </Label>
          </div>
        </RadioGroup>

        {formData.adMaxStyle === "UGC" && (
          <div className="space-y-4 pt-4">
            <h3 className="font-medium text-gray-900">Creator Preferences:</h3>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium mb-2">Gender:</h4>
                <RadioGroup
                  value={formData.adMaxCreatorGender}
                  onValueChange={(value) =>
                    updateFormData({ adMaxCreatorGender: value as FormData["adMaxCreatorGender"] })
                  }
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No Preference" id="no-preference" />
                    <Label htmlFor="no-preference">No Preference</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Age Group:</h4>
                <RadioGroup
                  value={formData.adMaxCreatorAge}
                  onValueChange={(value) => updateFormData({ adMaxCreatorAge: value as FormData["adMaxCreatorAge"] })}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Young" id="young" />
                    <Label htmlFor="young">Young (18-25)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Adult" id="adult" />
                    <Label htmlFor="adult">Adult (26-40)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Mature" id="mature" />
                    <Label htmlFor="mature">Mature (40+)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4">
          <h3 className="font-medium text-gray-900 mb-3">Select Add-ons (optional):</h3>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="script"
                checked={formData.addOns.includes("script")}
                onCheckedChange={() => handleAddOnToggle("script")}
              />
              <Label htmlFor="script" className="flex-1">
                Custom Script
              </Label>
              <span className="text-sm font-medium">+₹999</span>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="voiceover"
                checked={formData.addOns.includes("voiceover")}
                onCheckedChange={() => handleAddOnToggle("voiceover")}
              />
              <Label htmlFor="voiceover" className="flex-1">
                Professional Voice-over
              </Label>
              <span className="text-sm font-medium">+₹1500</span>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="hooks"
                checked={formData.addOns.includes("hooks")}
                onCheckedChange={() => handleAddOnToggle("hooks")}
              />
              <Label htmlFor="hooks" className="flex-1">
                Multiple Hook Variations (3 hooks)
              </Label>
              <span className="text-sm font-medium">+₹1499</span>
            </div>

            {formData.adMaxStyle === "UGC" && (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="creator"
                  checked={formData.addOns.includes("creator")}
                  onCheckedChange={() => handleAddOnToggle("creator")}
                />
                <Label htmlFor="creator" className="flex-1">
                  Additional Creator
                </Label>
                <span className="text-sm font-medium">+₹3500</span>
              </div>
            )}
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

        <Button
          onClick={nextStep}
          disabled={
            !formData.adMaxStyle ||
            (formData.adMaxStyle === "UGC" && (!formData.adMaxCreatorGender || !formData.adMaxCreatorAge))
          }
          className="bg-blue-500 hover:bg-blue-600"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
