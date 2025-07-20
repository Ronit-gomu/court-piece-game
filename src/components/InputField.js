import React from 'react'

function InputField({type = "text", placeHolder = "Enter value", value , name , onChange , onClick}) {
  return (
    <input
        type={type}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={onChange}
        onClick={onClick}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"/>
  )
}

export default InputField