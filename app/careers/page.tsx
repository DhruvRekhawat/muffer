"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import JoinImage from "@/public/illustrations/Launch.svg"
import RatingImage from "@/public/illustrations/Rating.svg"
import { motion } from "framer-motion"
import { Calculator, ChevronRight, Clock, Globe, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useEffect, useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function HeroSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-32 px-4"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Join <span className="text-blue-600">muffer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                We&apos;re making creative services as easy as ordering pizza. Join our team of talented video editors and
                work on your terms.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">100% Remote</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Flexible Hours</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Fast-Paced</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
                <Link href={"#application"}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg cursor-pointer">
                Start Your Application
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="lg:order-last">
            {/* Hero Illustration Placeholder */}
            <div className="w-full h-96 flex items-center justify-center">
              <Image src={JoinImage} alt="career" height={400} width={400} ></Image>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function BenefitsSection() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Join a Growing Team",
      description: "Be part of a fast-growing company that's revolutionizing creative services delivery.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Choose Your Hours",
      description: "Work when you want, how you want. Perfect work-life balance on your terms.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Work From Anywhere",
      description: "100% remote work. All you need is a computer and internet connection.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Fast-Paced Projects",
      description: "Work on exciting, diverse projects with quick turnarounds and immediate impact.",
    },
  ]

  return (
    <motion.section
      className="py-20 px-4 bg-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose muffer?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re not just another creative agency. We&apos;re building the future of creative work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function EarningsCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState([20])
  const [displayEarnings, setDisplayEarnings] = useState(0)
  const hourlyRate = 25 // Base rate
  const totalEarnings = hoursPerWeek[0] * hourlyRate * 4.33 // Monthly earnings

  // Smooth number animation
  useEffect(() => {
    const startValue = displayEarnings
    const endValue = totalEarnings
    const duration = 800 // ms
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOut

      setDisplayEarnings(Math.round(currentValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [totalEarnings, displayEarnings])

  return (
    <motion.section
      className="py-20 px-4 bg-blue-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <Calculator className="w-10 h-10 text-blue-600 inline-block mr-3" />
            Earnings Calculator
          </h2>
          <p className="text-xl text-gray-600">See your potential monthly earnings based on hours worked per week</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="p-8">
            <div className="space-y-8">
              
              <div className="text-center p-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white">
                <div className="text-6xl md:text-7xl font-bold mb-4 font-mono">${displayEarnings.toLocaleString()}</div>
                <div className="text-xl opacity-90">Per Month</div>
                <div className="text-sm opacity-75 mt-2">Based on {hoursPerWeek[0]} hours/week at $25/hour</div>
              </div>


              <div>
                <Label className="text-lg font-semibold mb-4 block">Hours per week: {hoursPerWeek[0]}</Label>
                <Slider
                  value={hoursPerWeek}
                  onValueChange={setHoursPerWeek}
                  max={40}
                  min={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>5 hours</span>
                  <span>40 hours</span>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                * Actual rates may vary based on experience and project complexity.
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Video Editor",
      location: "San Francisco, CA",
      quote:
        "Working with muffer has been incredible. The flexibility to choose my own hours while working on amazing projects is exactly what I needed.",
      rating: 5,
      monthsWorking: 8,
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Video Editor",
      location: "Austin, TX",
      quote:
        "The fast-paced environment keeps me engaged, and the team is super supportive. Plus, the pay is competitive and always on time.",
      rating: 5,
      monthsWorking: 14,
    },
    {
      name: "Emma Thompson",
      role: "Video Editor",
      location: "London, UK",
      quote:
        "I love the variety of projects I get to work on. From social media content to corporate videos, every day is different and exciting.",
      rating: 5,
      monthsWorking: 6,
    },
  ]

  return (
    <motion.section
      className="py-20 px-4 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from video editors who are already part of the muffer family
          </p>
        </motion.div>

        {/* Illustration Placeholder */}
        <motion.div
          variants={fadeInUp}
          className="w-full h-64 flex items-center justify-center mb-12 "
        >
        <Image src={RatingImage} alt="earnings" width={400} height={400}></Image>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} • {testimonial.location}
                  </CardDescription>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 italic mb-4">&qout;{testimonial.quote}&quot;</p>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.monthsWorking} months with muffer
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    driveLink: "",
    additionalInfo: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <motion.section
      className="py-20 px-4 bg-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      id="application"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-600">
            Fill out the application below and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="experience" className="text-sm font-medium">
                    Years of Experience *
                  </Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="portfolio" className="text-sm font-medium">
                  Portfolio Website/URL *
                </Label>
                <Input
                  id="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">Social Media Links (Optional)</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="instagram" className="text-xs text-gray-500">
                      Instagram
                    </Label>
                    <Input
                      id="instagram"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange("instagram", e.target.value)}
                      placeholder="@username"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter" className="text-xs text-gray-500">
                      Twitter/X
                    </Label>
                    <Input
                      id="twitter"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange("twitter", e.target.value)}
                      placeholder="@username"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin" className="text-xs text-gray-500">
                      LinkedIn
                    </Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      placeholder="Profile URL"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="driveLink" className="text-sm font-medium">
                  Google Drive/Dropbox Link to Work Samples *
                </Label>
                <Input
                  id="driveLink"
                  type="url"
                  value={formData.driveLink}
                  onChange={(e) => handleInputChange("driveLink", e.target.value)}
                  required
                  className="mt-1"
                  placeholder="https://drive.google.com/..."
                />
                <p className="text-xs text-gray-500 mt-1">Please share a folder with your best video editing work</p>
              </div>

              <div>
                <Label htmlFor="additionalInfo" className="text-sm font-medium">
                  Tell us about yourself and why you want to join muffer
                </Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  rows={4}
                  className="mt-1"
                  placeholder="Share your story, what excites you about video editing, and why you'd be a great fit for our team..."
                />
              </div>

              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3">
                  Submit Application
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <EarningsCalculator />
      <TestimonialsSection />
      <ApplicationForm />
    </div>
  )
}
