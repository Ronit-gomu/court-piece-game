import React from 'react'

function Text({text}) {
    const base = 'text-lg text-gray-700 mb-8 max-w-md mx-auto';   
  return (
    <p className={base}>{text}</p>
  )
}

export default Text