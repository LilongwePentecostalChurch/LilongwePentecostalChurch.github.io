import React from 'react'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { style, className, ...rest } = props

  // Return a placeholder div instead of an image
  return (
    <div
      className={`bg-gradient-to-br from-[#1A0500] to-[#7A1A0A]/50 flex items-center justify-center ${className ?? ''}`}
      style={style}
      {...rest}
    >
      <div className="text-white/20 text-center p-4">
        {/* Icon placeholder */}
        <svg 
          className="w-12 h-12 mx-auto mb-2 opacity-30" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 15l-5-5L5 21" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  )
}
