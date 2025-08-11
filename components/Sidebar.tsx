import StepIndicator from './StepIndicator'
import TestimonialCard from './TestimonialCard'

export default function Sidebar() {
  return (
    <aside className="w-96 bg-[#E8F0FD]  p-8 flex flex-col h-screen">
      <div className="flex-1 space-y-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          
          <span className="text-xl font-bold ">OnlineMed</span>
        </div>
        
        {/* Badge */}
        <div className="inline-flex items-center rounded-full text-[14px] leading-5 font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_1_134)">
<g clip-path="url(#clip1_1_134)">
<path d="M17.2813 8.12648C17.0008 7.83333 16.7107 7.53124 16.6012 7.26563C16.5001 7.02232 16.4941 6.61904 16.4882 6.22842C16.477 5.50223 16.4651 4.67931 15.8929 4.10714C15.3207 3.53497 14.4979 3.52306 13.7717 3.5119C13.381 3.50595 12.9778 3.5 12.7345 3.39881C12.4696 3.28944 12.1667 2.99925 11.8736 2.71875C11.3602 2.22545 10.7768 1.66666 10.0001 1.66666C9.22329 1.66666 8.64071 2.22545 8.12657 2.71875C7.83341 2.99925 7.53133 3.28944 7.26571 3.39881C7.02389 3.5 6.61913 3.50595 6.2285 3.5119C5.50231 3.52306 4.6794 3.53497 4.10722 4.10714C3.53505 4.67931 3.52686 5.50223 3.51199 6.22842C3.50603 6.61904 3.50008 7.02232 3.39889 7.26563C3.28952 7.5305 2.99934 7.83333 2.71883 8.12648C2.22553 8.63988 1.66675 9.22321 1.66675 10C1.66675 10.7768 2.22553 11.3593 2.71883 11.8735C2.99934 12.1667 3.28952 12.4688 3.39889 12.7344C3.50008 12.9777 3.50603 13.3809 3.51199 13.7716C3.52315 14.4978 3.53505 15.3207 4.10722 15.8929C4.6794 16.465 5.50231 16.4769 6.2285 16.4881C6.61913 16.494 7.02241 16.5 7.26571 16.6011C7.53059 16.7106 7.83341 17.0008 8.12657 17.2812C8.63997 17.7746 9.22329 18.3333 10.0001 18.3333C10.7768 18.3333 11.3594 17.7746 11.8736 17.2812C12.1667 17.0008 12.4688 16.7106 12.7345 16.6011C12.9778 16.5 13.381 16.494 13.7717 16.4881C14.4979 16.4769 15.3207 16.465 15.8929 15.8929C16.4651 15.3207 16.477 14.4978 16.4882 13.7716C16.4941 13.3809 16.5001 12.9777 16.6012 12.7344C16.7107 12.4695 17.0008 12.1667 17.2813 11.8735C17.7747 11.3601 18.3334 10.7768 18.3334 10C18.3334 9.22321 17.7747 8.64063 17.2813 8.12648ZM13.3974 8.63542L9.23074 12.8021C9.17545 12.8574 9.1098 12.9013 9.03755 12.9313C8.96528 12.9612 8.88782 12.9767 8.8096 12.9767C8.73139 12.9767 8.65393 12.9612 8.58166 12.9313C8.50941 12.9013 8.44376 12.8574 8.38847 12.8021L6.60276 11.0164C6.49107 10.9047 6.42832 10.7532 6.42832 10.5952C6.42832 10.4372 6.49107 10.2858 6.60276 10.1741C6.71445 10.0624 6.86594 9.99966 7.02389 9.99966C7.18184 9.99966 7.33333 10.0624 7.44502 10.1741L8.8096 11.5394L12.5551 7.79315C12.6105 7.73784 12.6761 7.69398 12.7484 7.66404C12.8207 7.63412 12.8981 7.61871 12.9763 7.61871C13.0545 7.61871 13.1319 7.63412 13.2042 7.66404C13.2765 7.69398 13.3421 7.73784 13.3974 7.79315C13.4527 7.84845 13.4966 7.91411 13.5265 7.98637C13.5565 8.05863 13.5718 8.13607 13.5718 8.21428C13.5718 8.29249 13.5565 8.36994 13.5265 8.4422C13.4966 8.51445 13.4527 8.58011 13.3974 8.63542Z" fill="#2563EB"/>
</g>
</g>
<defs>
<clipPath id="clip0_1_134">
<rect width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip1_1_134">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
        <span className='ml-2 text-blue-600'>  Money Back Guarantee</span>
        </div>
        
        {/* Main Headline */}
        <div className="!mt-[6px]">
          <h2 className="text-[32px] tracking-[-1px] font-bold  text-gray-900 leading-12">
            Your <span className="text-blue-600">Work Note</span> is Minutes Away
          </h2>
          <p className="text-[16px]  leading-6 text-[#111827] mt-[10px]">
            Note: Due to capacity we are currently only able to provide a limited number of notes per day. To see if you qualify please fill out the following short survey!
          </p>
        </div>
        
        {/* Testimonial */}
      </div>
              <TestimonialCard />

      {/* Pagination Dots - Fixed at bottom */}
      <div className="flex justify-left space-x-2 pt-4">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
      </div>
    </aside>
  )
}
