import StepIndicator from './StepIndicator'
import TestimonialCard from './TestimonialCard'

export default function Sidebar() {
  return (
    <aside className="w-96 bg-blue-50 border-r border-blue-200 p-8 flex flex-col h-screen">
      <div className="flex-1 space-y-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <span className="text-xl font-bold text-blue-900">OnlineMed</span>
        </div>
        
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Money Back Guarantee
        </div>
        
        {/* Main Headline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Your <span className="text-blue-600">Work Note</span> is Minutes Away
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Note: Due to capacity we are currently only able to provide a limited number of notes per day. To see if you qualify please fill out the following short survey!
          </p>
        </div>
        
        {/* Testimonial */}
        <TestimonialCard />
      </div>
      
      {/* Pagination Dots - Fixed at bottom */}
      <div className="flex justify-center space-x-2 pt-4">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
      </div>
    </aside>
  )
}
