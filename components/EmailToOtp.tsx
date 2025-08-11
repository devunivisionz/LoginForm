"use client";
import { useState } from "react";

export default function EmailToOTPForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleNext = () => {
    if (email.trim()) {
      setStep(2);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="relative w-full max-w-sm h-[120px]">
        {/* Email Input */}
        <div
          className={`absolute left-0 w-full transition-all ${
            step === 2 ? "animate-slideUp" : ""
          }`}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {step === 1 && (
            <button
              onClick={handleNext}
              className="mt-3 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>

        {/* OTP Input */}
        {step === 2 && (
          <div className="absolute left-0 w-full top-[50px] animate-fadeIn">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}
