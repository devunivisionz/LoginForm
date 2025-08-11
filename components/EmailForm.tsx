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

      <div className="space-y-4 overflow-hidden relative  rounded-[12px] border-[1px] border-[#DFE1E6] py-6">
        {/* Email Input Section */}
        <div
          className={`transition-all duration-300 ${step === 2 ? 'animate-slideUp animate-slideUp relative mx-auto' : ''
            }`}
        >
          {step === 1 ? (

            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-[calc(100% - 48px)] custom-max-width mx-auto flex px-4 py-[11px] pr-12 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
              {isLoading && (
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>

          ) : (
            <div className="bg-[#E8F0FD] rounded-[12px] rounded-bl-[0] rounded-br-[0] p-3 px-[24px] flex items-center justify-between ">
              <div className="flex items-center space-x-3 gap-x-[12px] animate-slideLeft">
                <span className="text-blue-700 font-normal text-[#2563EB]">Email</span>
                {/* <span className="text-blue-700 font-bold"></span> */}
                <ShinyText text={email} disabled={false} speed={8} />

              </div>
              <button
                type="button"
                onClick={() => setShowChangeEmail(!showChangeEmail)}
                className="text-[#353849] hover:text-blue-700 font-normal underline decoration-dotted underline-offset-4"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* OTP Section */}
        {step === 2 && (
          <div className="animate-fadeIn relative top-[0px] p-6 left-0 w-full mt-[0px]">
            <h2 className="text-[16px]  leading-6 font-semibold text-gray-900 mb-0">
              Enter verification code
            </h2>
            <p className="text-sm leading-6 text-gray-600 mb-[18px]">
              Enter the code sent to <span className='font-bold'>{email}</span> to use your saved information.
            </p>

            <div className="flex justify-left space-x-3 mb-3">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={el => { inputRefs.current[index] = el }} // <-- just assign, no return
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-12 h-12 text-center text-xl font-light text-[#0D0D12] border-[1px] border-[#DFE1E6] rounded-[12px] focus:ring-2 focus:ring-blue-200 ${index === 3
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300'
                    }`}
                  inputMode="numeric"
                />
              ))}
            </div>

            <div className="text-left ">
              <button
                type="button"
                className="text-[#4B556399] hover:text-blue-700 text-sm font-medium"
              >
                Didn’t receive a code? <span className='text-[#3971ED]'>Send again</span>
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
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
        >
          <span className='text-[22px] mr-[6px] flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
<path d="M7.94219 12.8078C8.00026 12.8659 8.04632 12.9348 8.07775 13.0107C8.10918 13.0865 8.12535 13.1679 8.12535 13.25C8.12535 13.3321 8.10918 13.4134 8.07775 13.4893C8.04632 13.5652 8.00026 13.6341 7.94219 13.6922C7.88412 13.7502 7.81518 13.7963 7.73931 13.8277C7.66344 13.8592 7.58213 13.8753 7.5 13.8753C7.41788 13.8753 7.33656 13.8592 7.26069 13.8277C7.18482 13.7963 7.11588 13.7502 7.05782 13.6922L0.807816 7.44217C0.749705 7.38412 0.703606 7.31519 0.672154 7.23932C0.640701 7.16344 0.624512 7.08212 0.624512 6.99998C0.624512 6.91785 0.640701 6.83652 0.672154 6.76064C0.703606 6.68477 0.749705 6.61584 0.807816 6.55779L7.05782 0.307794C7.17509 0.190518 7.33415 0.124634 7.5 0.124634C7.66586 0.124634 7.82492 0.190518 7.94219 0.307794C8.05947 0.425069 8.12535 0.584129 8.12535 0.749981C8.12535 0.915834 8.05947 1.07489 7.94219 1.19217L2.1336 6.99998L7.94219 12.8078Z" fill="#2563EB"/>
</svg>
            </span> Back
        </button>

        {step === 1 ? (
          <Button
            type="submit"
            // variant="primary" 
            className='bg-[#4B556399]'
            disabled={!email.trim() || isLoading}
            onClick={handleEmailSubmit}
          >
            Next
          </Button>
        ) : (
          <Button
            type="submit"
            // variant="primary" 
            className='bg-[#4B556399] :hover:bg-[#2563EB]'
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

