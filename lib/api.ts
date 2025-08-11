// Mock API functions - replace with real API calls in production

export async function sendEmail(email: string): Promise<void> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock success - in production, make actual API call
  console.log(`Sending verification email to: ${email}`)
  
  // Simulate potential error (uncomment to test error handling)
  // throw new Error('Failed to send email')
}

export async function verifyCode(code: string): Promise<void> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock validation - in production, make actual API call
  if (code === '1234') {
    console.log('Code verified successfully')
    return
  }
  
  throw new Error('Invalid verification code')
}
