import React from 'react';

// Button props ka type define karna
interface ButtonProps {
  label: string; // Button ka text
  className?: string; // Optional classes for styling
  onClick?: () => void; // Optional click event handler
}

// Button component
export const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} // Default button styling
      onClick={onClick} // Handle button click
    >
      {label}
    </button>
  );
};
