import React from 'react';

const styles = {
  base: `px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition`,
  variants: {
    primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400`,
    danger: `bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`,
  },
};

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
}) {
  const variantClass = styles.variants[variant] || styles.variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.base} ${variantClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
