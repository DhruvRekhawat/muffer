"use client"

import type React from "react"

import type { FormData } from "./muffer-order-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Upload } from "lucide-react"
import { useState } from "react"

interface UploadStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function UploadStep({ formData, updateFormData, nextStep, prevStep }: UploadStepProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setSelectedFiles(fileArray)
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Upload & Brief</h2>
        <p className="text-gray-600">Let&apos;s collect your files and brief details</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="file-upload">Upload Files (Max 1GB each)</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Input id="file-upload" type="file" multiple onChange={handleFileChange} className="hidden" />
            <Label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-sm font-medium text-gray-900">Click to upload or drag and drop</span>
                <span className="text-xs text-gray-500 mt-1">Support for video, audio, images, and documents</span>
              </div>
            </Label>
          </div>

          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Selected Files:</p>
              <ul className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                    <span className="text-sm truncate max-w-[80%]">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="h-6 w-6 p-0 text-gray-500"
                    >
                      ✕
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="file-links">Additional Links (Google Drive, Dropbox, etc.)</Label>
          <Input
            id="file-links"
            placeholder="Paste your file sharing links here"
            value={formData.fileLinks}
            onChange={(e) => updateFormData({ fileLinks: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="brief">Quick Brief</Label>
          <Textarea
            id="brief"
            placeholder="Describe what you want us to create. Include any specific instructions, references, or requirements."
            className="min-h-[120px]"
            value={formData.brief}
            onChange={(e) => updateFormData({ brief: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={prevStep} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <Button onClick={nextStep} className="bg-blue-500 hover:bg-blue-600">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
