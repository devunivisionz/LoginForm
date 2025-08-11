'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from './Button'
import { verifyCode } from '@/lib/api'
import { codeValidator } from '@/lib/validations'

export default function CodeInput() {
  const [code, setCode] = useState(['', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('justin2013@gmail.com')
  const [showChangeEmail, setShowChangeEmail] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 4)
  }, [])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple characters
    
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    
    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    const codeString = code.join('')
    if (!codeValidator(codeString)) {
      setError('Please enter the 4-digit verification code')
      return
    }
    
    setIsLoading(true)
    
    try {
      await verifyCode(codeString)
      // Redirect to next step or success page
      router.push('/success')
    } catch (err) {
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
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          What is your email?
        </h1>
        <p className="text-gray-600">
          This is where we send the note.
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Email Display */}
        <div>
         
          <div className="flex items-center space-x-3">
            <div className="flex-1 px-4 py-3 border border-[#2563EB]rounded-lg bg-gray-50">
              {email}
            </div>
            <button
              type="button"
              onClick={() => setShowChangeEmail(!showChangeEmail)}
              className="text-blue-600 hover:text-blue-700 font-medium px-3 py-2"
            >
              Change
            </button>
          </div>
        </div>

        {/* Change Email Input */}
        {showChangeEmail && (
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
                className="input-field"
                placeholder="Enter new email"
              />
              <button
                type="button"
                onClick={handleChangeEmail}
                className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        )}

        {/* Verification Code Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Enter verification code
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter the code sent to {email} to use your saved information.
          </p>
          
          <div className="flex justify-center space-x-3 mb-4">
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
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Didn't receive a code? Send again
            </button>
          </div>
        </div>
        
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}
        
        <div className="flex justify-between items-center pt-4">
          <Button 
            type="button" 
            variant="secondary"
            onClick={() => router.back()}
          >
            Back
          </Button>
          
         <Button 
  type="button" 
  variant="secondary" 
  disabled={code.join('').length !== 4}
  onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent)}
>
  Next
</Button>
        </div>
      </div>
    </div>
  )
}
