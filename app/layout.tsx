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
      <head>
       <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet"/>

      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
