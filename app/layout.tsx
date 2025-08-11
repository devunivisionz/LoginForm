import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Email Verification - Step 3/9',
  description: 'Complete your email verification to continue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
