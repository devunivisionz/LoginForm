'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from './Button'
import { sendEmail } from '@/lib/api'
import { emailValidator } from '@/lib/validations'
import ShinyText from './ShinyText'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState(['3', '2', '5', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)
  const [showChangeEmail, setShowChangeEmail] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 4)
  }, [])

 const handleEmailSubmit = async () => {
  setError('')
  if (!emailValidator(email)) {
    setError('Please enter a valid email address')
    return
  }
  setIsLoading(true)
  try {
    await sendEmail(email)
    setStep(2) // triggers animation
  } catch (err) {
    setError('Failed to send verification email. Please try again.')
  } finally {
    setIsLoading(false)
  }
}

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const codeString = code.join('')
    if (codeString.length !== 4) {
      setError('Please enter the 4-digit verification code')
      return
    }
    setIsLoading(true)
    try {
      // verifyCode(codeString) — assuming your API call here
      router.push('/success')
    } catch {
      setError('Invalid verification code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeEmail = () => {
    if (newEmail.trim()) {
      setEmail(newEmail)
      setNewEmail('')
      setShowChangeEmail(false)
    }
  }

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <div className="text-left mb-4">
        <span className="text-blue-600 font-semibold text-lg text-[20px]">
          Step 3<span className='text-gray-500'>/9</span>
        </span>
      </div>

      {/* Header */}
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">What is your email?</h1>
        <p className="text-gray-600">This is where we send the note.</p>
      </div>

      <div className="space-y-4 relative min-h-[140px]">
        {/* Email Input Section */}
        <div
          className={`transition-all duration-300 ${
            step === 2 ? 'animate-slideUp absolute w-full' : ''
          }`}
        >
          {step === 1 ? (
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
              {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-blue-700 font-medium">Email</span>
                {/* <span className="text-blue-700 font-bold"></span> */}
                <ShinyText text={email} disabled={false} speed={8}  />

              </div>
              <button
                type="button"
                onClick={() => setShowChangeEmail(!showChangeEmail)}
                className="text-blue-600 hover:text-blue-700 font-medium underline decoration-dotted underline-offset-4"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* OTP Section */}
        {step === 2 && (
          <div className="animate-fadeIn absolute top-[70px] left-0 w-full">
            <div className="flex justify-left space-x-3 mb-3">
              {code.map((digit, index) => (
           <input
  key={index}
  ref={el => { inputRefs.current[index] = el }}
  type="text"
  maxLength={1}
  value={digit}
  onChange={(e) => handleCodeChange(index, e.target.value)}
  onKeyDown={(e) => handleKeyDown(index, e)}
  className="w-12 h-12 text-center text-xl font-bold border-[1px] border-[#DFE1E6] rounded-[12px] focus:ring-2 focus:ring-blue-200"
  inputMode="numeric"
/>
              ))}
            </div>
            <div className="text-center">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium underline"
              >
                Send again
              </button>
            </div>
          </div>
        )}

        {/* Change Email Input */}
        {/* {showChangeEmail && (
          <div>
            <label htmlFor="newEmail" className="block text-sm font-medium text-gray-700 mb-2">
              New Email
            </label>
            <div className="flex items-center space-x-3">
              <input
                id="newEmail"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter new email"
              />
              <button
                type="button"
                onClick={handleChangeEmail}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 text-sm"
              >
                Update
              </button>
            </div>
          </div>
        )} */}

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-4">
        <button
          type="button"
          onClick={() => step === 2 ? setStep(1) : router.back()}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back
        </button>
        
        {step === 1 ? (
          <Button 
            type="submit" 
            variant="primary" 
            disabled={!email.trim() || isLoading}
            onClick={handleEmailSubmit}
          >
            Next
          </Button>
        ) : (
<Button 
  type="submit" 
  variant="primary" 
  disabled={!email.trim() || isLoading}
  onClick={handleEmailSubmit}
>
  Next
</Button>
        )}
      </div>
    </div>
  )
}
