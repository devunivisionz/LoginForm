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
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[...Array(1)].map((_, i) => (
            <svg xmlns="http://www.w3.org/2000/svg"     key={i}
 width="102" height="19" viewBox="0 0 102 19" fill="none">
              <g clipPath="url(#clip0_1_147)">
                <g clipPath="url(#clip1_1_147)">
                  <path d="M9.20452 13.7652L13.2 12.7526L14.8693 17.8974L9.20452 13.7652ZM18.3995 7.1152H11.3664L9.20452 0.492615L7.0426 7.1152H0.00952148L5.70167 11.2201L3.53974 17.8427L9.23186 13.7378L12.7347 11.2201L18.3995 7.1152Z" fill="#219653" />
                  <path d="M30.1022 13.7652L34.0977 12.7526L35.767 17.8974L30.1022 13.7652ZM39.2972 7.1152H32.2641L30.1022 0.492615L27.9403 7.1152H20.9072L26.5993 11.2201L24.4374 17.8427L30.1296 13.7378L33.6324 11.2201L39.2972 7.1152Z" fill="#219653" />
                  <path d="M50.9999 13.7652L54.9954 12.7526L56.6647 17.8974L50.9999 13.7652ZM60.1949 7.1152H53.1618L50.9999 0.492615L48.838 7.1152H41.8049L47.4971 11.2201L45.3351 17.8427L51.0273 13.7378L54.5301 11.2201L60.1949 7.1152Z" fill="#219653" />
                  <path d="M71.8976 13.7652L75.8931 12.7526L77.5624 17.8974L71.8976 13.7652ZM81.0926 7.1152H74.0596L71.8976 0.492615L69.7357 7.1152H62.7026L68.3948 11.2201L66.2328 17.8427L71.925 13.7378L75.4278 11.2201L81.0926 7.1152Z" fill="#219653" />
                  <path d="M92.7953 13.7652L96.791 12.7526L98.4603 17.8974L92.7953 13.7652ZM101.99 7.1152H94.957L92.7953 0.492615L90.6337 7.1152H83.6003L89.2929 11.2201L87.1304 17.8427L92.8229 13.7378L96.3254 11.2201L101.99 7.1152Z" fill="#219653" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_147">
                  <rect width="102" height="18.39" fill="white" />
                </clipPath>
                <clipPath id="clip1_1_147">
                  <rect width="101.981" height="18.39" fill="white" transform="translate(0.00952148)" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <span className="text-xs text-gray-500">1 week ago</span>
      </div>
      <blockquote className="text-gray-700 mt-2 text-sm leading-relaxed mb-3">
        "Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes."
      </blockquote>


    </div>
  )
}



