import React from 'react'

function Button({variant, text}) {
  const base =
    'w-1/2 text-white font-semibold py-2 px-4 rounded-md transition';

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    success: 'bg-green-500 hover:bg-green-600',
    danger: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <button className={`${base} ${variants[variant]}`} >
      {text}
    </button>
  );
}

export default Button