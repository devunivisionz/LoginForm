"use client"
import { useState, useEffect } from "react"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    name: "Nick P.",
    subtitle: "Student • New York",
    time: "1 week ago",
    quote:
      "Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.",
  },
  {
    name: "Jane Smith",
    subtitle: "Designer • California",
    time: "2 weeks ago",
    quote:
      "Such a smooth process! I was able to get my note in under 10 minutes and it was accepted without question.",
  },
  {
    name: "Mark L.",
    subtitle: "Engineer • Texas",
    time: "3 weeks ago",
    quote:
      "I was skeptical at first, but this saved me so much time compared to going to urgent care.",
  },
]

export default function Sidebar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <aside className="w-full lg:w-96 bg-[#E8F0FD] p-4 sm:p-6 lg:p-8 flex flex-col min-h-screen">
      <div className="flex-1 space-y-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold">OnlineMed</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center rounded-full text-sm sm:text-base font-bold">
          <span className="ml-2 text-blue-600">Money Back Guarantee</span>
        </div>

        {/* Headline */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] tracking-[-1px] font-bold text-gray-900">
            Your <span className="text-blue-600">Work Note</span> is Minutes Away
          </h2>
          <p className="text-sm sm:text-base text-[#111827] mt-2">
            Note: Due to capacity we are currently only able to provide a limited number of notes per day. To see if you qualify please fill out the following short survey!
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden w-full mt-6">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-1 sm:px-2">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex space-x-2 pt-4 justify-center">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-colors ${
              currentIndex === index ? "bg-blue-600" : "bg-blue-200"
            }`}
          />
        ))}
      </div>
    </aside>
  )
}
