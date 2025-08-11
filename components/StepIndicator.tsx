export default function StepIndicator() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Progress</span>
        <span className="text-sm font-medium text-primary-600">Step 3 of 9</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{ width: '33.33%' }}
        ></div>
      </div>
      
      <div className="text-sm text-gray-600">
        Email Verification
      </div>
    </div>
  )
}
