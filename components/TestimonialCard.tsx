export default function TestimonialCard() {
  return (
    <div className="bg-white rounded-xl p-6 border border-blue-100">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
          <span className="text-orange-600 font-medium text-sm">NP</span>
        </div>
        <div>
          <div className="font-medium text-gray-900">Nick P.</div>
          <div className="text-sm text-gray-500">Student • New York</div>
        </div>
      </div>
      
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-3">
        "Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes."
      </blockquote>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-green-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-gray-500">1 week ago</span>
      </div>
    </div>
  )
}



