import React, { forwardRef } from 'react';
import { AlertCircle, type LucideIcon } from 'lucide-react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  isLoading?: boolean;
  variant?: 'default' | 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      label,
      error,
      helperText,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      isLoading = false,
      variant = 'default',
      size = 'md',
      fullWidth = true,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    };

    // Variant classes
    const variantClasses = {
      default: 'border border-gray-300 bg-white',
      outline: 'border-2 border-gray-300 bg-transparent',
      filled: 'border border-gray-200 bg-gray-50',
    };

    // Base input classes
    const baseClasses = `
      rounded-lg
      transition-all duration-200
      focus:ring-2 focus:ring-amber-500 focus:border-amber-500
      placeholder:text-gray-400
      ${fullWidth ? 'w-full' : ''}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${error ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500' : ''}
      ${disabled || isLoading ? 'bg-gray-100 cursor-not-allowed opacity-70' : ''}
      ${LeftIcon ? 'pl-10' : ''}
      ${RightIcon || error ? 'pr-10' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div className={`space-y-2 ${fullWidth ? 'w-full' : ''}`}>
        {/* Label */}
        {label && (
          <label 
            htmlFor={inputId} 
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            {LeftIcon && <LeftIcon className="w-4 h-4 text-amber-600" />}
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {LeftIcon && !label && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LeftIcon className="w-5 h-5 text-gray-400" />
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            className={baseClasses}
            disabled={disabled || isLoading}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />

          {/* Right Icon or Error Icon */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {error ? (
              <AlertCircle className="w-5 h-5 text-red-500" />
            ) : RightIcon ? (
              <RightIcon className="w-5 h-5 text-gray-400" />
            ) : null}
          </div>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-600"></div>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
