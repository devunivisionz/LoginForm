import Layout from '@/components/Layout'
import Loader from '@/components/Loader'

export default function LoadingPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
        <Loader />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Sending verification email...
          </h2>
          <p className="text-gray-600">
            Please wait while we send the verification code to your email.
          </p>
        </div>
      </div>
    </Layout>
  )
}
