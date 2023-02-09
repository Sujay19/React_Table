import React from 'react'

const Input = ({placeholder,type,value,handleChange}) => {

  return (
    <div>
    <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={handleChange}
    className="my-2 w-full rounded-sm  p-2 outline-none border-none bg-transparent text-white text-sm white-glassmorphism"
    />
    </div>
  )
}

export default Input