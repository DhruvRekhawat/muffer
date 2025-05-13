"use client"

import type { FormData } from "../muffer-order-form"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Video, Film, Tv2 } from "lucide-react"

interface ServiceSelectionStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function ServiceSelectionStep({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: ServiceSelectionStepProps) {
  const handleServiceChange = (value: string) => {
    // Reset service-specific fields when changing service
    updateFormData({
      service: value as FormData["service"],
      editMaxPlan: "",
      adMaxStyle: "",
      adMaxCreatorGender: "",
      adMaxCreatorAge: "",
      contentMaxLength: "",
      addOns: [],
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Select Your Primary Need</h2>
        <p className="text-gray-600">Choose the service that best fits your requirements</p>
      </div>

      <RadioGroup value={formData.service} onValueChange={handleServiceChange} className="space-y-3">
        <div
          className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
          ${formData.service === "EditMax" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
        >
          <RadioGroupItem value="EditMax" id="EditMax" className="sr-only" />
          <Label htmlFor="EditMax" className="flex flex-1 cursor-pointer items-center space-x-3">
            <div className="rounded-full bg-blue-100 p-2">
              <Video className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">EditMax</p>
              <p className="text-sm text-gray-500">Upload your raw videos → We professionally edit them.</p>
            </div>
          </Label>
        </div>

        <div
          className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
          ${formData.service === "AdMax" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
        >
          <RadioGroupItem value="AdMax" id="AdMax" className="sr-only" />
          <Label htmlFor="AdMax" className="flex flex-1 cursor-pointer items-center space-x-3">
            <div className="rounded-full bg-blue-100 p-2">
              <Film className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">AdMax</p>
              <p className="text-sm text-gray-500">We create powerful video ads for you.</p>
            </div>
          </Label>
        </div>

        <div
          className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all
          ${formData.service === "ContentMax" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
        >
          <RadioGroupItem value="ContentMax" id="ContentMax" className="sr-only" />
          <Label htmlFor="ContentMax" className="flex flex-1 cursor-pointer items-center space-x-3">
            <div className="rounded-full bg-blue-100 p-2">
              <Tv2 className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">ContentMax</p>
              <p className="text-sm text-gray-500">We handle everything from script to final video.</p>
            </div>
          </Label>
        </div>
      </RadioGroup>

      <div className="flex justify-between pt-4">
        <Button onClick={prevStep} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <Button onClick={nextStep} disabled={!formData.service} className="bg-blue-500 hover:bg-blue-600">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
