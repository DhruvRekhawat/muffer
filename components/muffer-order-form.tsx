"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import WelcomeStep from "./welcome-step"
import ServiceSelectionStep from "./service-selection-step"
import EditMaxStep from "./edit-max-step"
import AdMaxStep from "./ad-max-step"
import ContentMaxStep from "./content-max-step"
import SubscriptionStep from "./subscription-step"
import UploadStep from "./upload-step"
import ReviewStep from "./review-step"
import ConfirmationStep from "./confirmation-step"
import ProgressBar from "./progress-bar"

export type FormData = {
  name: string
  phone: string
  email: string
  company: string
  service: "EditMax" | "AdMax" | "ContentMax" | ""
  editMaxPlan: "Short" | "Standard" | "Premium" | ""
  adMaxStyle: "Stock" | "UGC" | ""
  adMaxCreatorGender: "Male" | "Female" | "No Preference" | ""
  adMaxCreatorAge: "Young" | "Adult" | "Mature" | ""
  contentMaxLength: "Short" | "Standard" | "Premium" | ""
  addOns: string[]
  wantsSubscription: boolean
  subscriptionBundle: "Starter" | "Growth" | "Pro" | ""
  brief: string
  fileLinks: string
  totalPrice: number
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  company: "",
  service: "",
  editMaxPlan: "",
  adMaxStyle: "",
  adMaxCreatorGender: "",
  adMaxCreatorAge: "",
  contentMaxLength: "",
  addOns: [],
  wantsSubscription: false,
  subscriptionBundle: "",
  brief: "",
  fileLinks: "",
  totalPrice: 0,
}

export default function MufferOrderForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setCurrentStep(currentStep + 1)
  }

  // Calculate total steps based on service selection
  const getTotalSteps = () => {
    // Base steps: Welcome, Service Selection, Subscription, Upload, Review
    let totalSteps = 5

    // Add service-specific step
    if (formData.service) {
      totalSteps += 1
    }

    return totalSteps
  }

  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
      case 1:
        return (
          <ServiceSelectionStep
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 2:
        if (formData.service === "EditMax") {
          return (
            <EditMaxStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
          )
        } else if (formData.service === "AdMax") {
          return (
            <AdMaxStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
          )
        } else if (formData.service === "ContentMax") {
          return (
            <ContentMaxStep
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )
        }
        return null
      case 3:
        return (
          <SubscriptionStep
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 4:
        return (
          <UploadStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
        )
      case 5:
        return (
          <ReviewStep
            formData={formData}
            updateFormData={updateFormData}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        )
      case 6:
        return <ConfirmationStep formData={formData} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <img src="/placeholder.svg?height=60&width=180" alt="Muffer Logo" className="h-15 w-auto" />
      </div>

      {!isSubmitted && <ProgressBar currentStep={currentStep} totalSteps={getTotalSteps()} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-blue-100 shadow-md">
            <CardContent className="pt-6">{getStepContent()}</CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
