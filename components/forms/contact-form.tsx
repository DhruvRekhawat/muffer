"use client";
import { CheckIcon } from "lucide-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


// Interface for form inputs
interface FormInputs {
  name: string;
  phone: string;
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<FormInputs | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? (
        <form
          id="contactForm"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-md mx-auto"
        >
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="name"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={`px-3 py-2 bg-white dark:bg-neutral-800 border ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-neutral-700 focus:ring-blue-500"
              } rounded-lg focus:outline-none focus:ring-2`}
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>


          <div className="flex flex-col space-y-1">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className={`px-3 py-2 bg-white dark:bg-neutral-800 border ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-neutral-700 focus:ring-blue-500"
              } rounded-lg focus:outline-none focus:ring-2`}
              placeholder="(123) 456-7890"
              {...register("phone", {
                required: "Phone number is required",
              })}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="message"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className={`px-3 py-2 bg-white dark:bg-neutral-800 border ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-neutral-700 focus:ring-blue-500"
              } rounded-lg focus:outline-none focus:ring-2`}
              placeholder="Tell us about your needs..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message should be at least 10 characters",
                },
              })}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              {...register("consent", { required: "Consent is required" })}
            />
            <label
              htmlFor="consent"
              className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300"
            >
              I agree to be contacted by Muffer Buddies
            </label>
          </div>
          {errors.consent && (
            <p className="text-xs text-red-500">{errors.consent.message}</p>
          )}

        </form>
      ) : (
        <div className="text-center py-8 px-4 space-y-6 max-w-md mx-auto">
          <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
            <CheckIcon className="h-8 w-8 text-blue-600" />
          </div>
          
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
            Thanks for reaching out!
          </h3>
          
          <p className="text-neutral-600 dark:text-neutral-300">
            We&apos;ve received your message and our Muffer Buddies team will contact you within 24 hours at <span className="font-medium text-blue-600">{submittedData?.phone}</span>.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800 text-left">
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">
              <span className="font-medium">Request summary:</span>
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
              <span className="font-medium">Name:</span> {submittedData?.name}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              <span className="font-medium">Message:</span> {submittedData?.message ? submittedData.message.length > 50 ? submittedData.message.substring(0, 50) + "..." : submittedData.message : "N/A"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}