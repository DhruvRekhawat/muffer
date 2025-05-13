import type { Metadata } from "next"
import MufferOrderForm from "@/components/muffer-order-form"

export const metadata: Metadata = {
  title: "Muffer - Creative Services",
  description: "Professional video editing, ad creation, and content production services",
}

export default function Order() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-3xl mx-auto py-16 px-4">
        <MufferOrderForm />
      </div>
    </main>
  )
}
