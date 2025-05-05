"use client"

import { ChevronRight, Phone, ShoppingCart } from "lucide-react"
import Link from "next/link"
// import { useState } from "react"

import { Button } from "@/components/ui/button"
// import { CallMufferBuddyModal } from "./call-muffer-buddy-modal"

export default function VideoViewsCard() {
  // const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-gradient-to-br from-white to-blue-50  p-12 w-full mx-auto  relative my-12 overflow-hidden ">
      {/* <Ripple /> */}

      <h1 className="text-5xl font-bold mb-6 relative">Ready to muffer it?</h1>

      <p className="text-xl text-gray-700 mb-2 max-w-3xl">
        Let&apos;s turn your content into scroll-stopping videos that grow your audience and boost your engagement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-4">
      <div className="bg-blue-600 p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-white">Order Now</h3>
          </div>
          <p className="text-gray-100 mb-6">
            Ready to get started? Skip the call and place your order directly. Choose from our range of video creation
            services.
          </p>
          <Link href="/order" className="block">
            <Button className="w-full bg-white hover:bg-blue-100 text-blue-600 font-medium px-8 py-6 rounded-xl h-auto">
              Place Your Order
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600">Call Muffer Buddy</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Get personalized assistance from our Muffer Buddy who will guide you through our services and answer all
            your questions.
          </p>
          <Button
            // onClick={() => setShowModal(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 rounded-xl h-auto"
          >
            Request a Call
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>


      </div>

      {/* <CallMufferBuddyModal open={showModal} onOpenChange={setShowModal} /> */}
    </div>
  )
}
