"use client"

import type { FormData } from "./muffer-order-form"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRef } from "react";
 
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";

interface ConfirmationStepProps {
  formData: FormData
}

export default function ConfirmationStep({ formData }: ConfirmationStepProps) {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div className="space-y-6 py-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Your order is confirmed!</h2>
          <p className="text-gray-600">You&apos;ll receive polished, high-quality content soon.</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <h3 className="font-medium text-gray-900">Order Details</h3>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-gray-500">Order ID:</div>
          <div className="font-medium">{Math.random().toString(36).substring(2, 10).toUpperCase()}</div>

          <div className="text-gray-500">Name:</div>
          <div className="font-medium">{formData.name}</div>

          <div className="text-gray-500">Email:</div>
          <div className="font-medium">{formData.email}</div>

          <div className="text-gray-500">Phone:</div>
          <div className="font-medium">{formData.phone}</div>

          {formData.company && (
            <>
              <div className="text-gray-500">Company:</div>
              <div className="font-medium">{formData.company}</div>
            </>
          )}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
        <p className="text-gray-800">Track your order or reach out anytime:</p>
        <p className="font-medium text-blue-600 mt-1">support@muffer.in | WhatsApp: +91 9876543210</p>
      </div>

      <div className="pt-4 flex justify-center">
        <Button onClick={() => (window.location.href = "/")} className="bg-blue-500 hover:bg-blue-600">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
