import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to the verify-email page as the main entry point
  redirect('/verify-email')
}
