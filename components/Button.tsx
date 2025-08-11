import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  loading?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  loading = false,
  disabled = false,
  className = '',
  onClick 
}: ButtonProps) {
  const baseClasses = 'font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-700 focus:ring-gray-500'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  )
}
