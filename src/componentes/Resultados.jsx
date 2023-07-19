import React from 'react'

export default function Resultados({ years, months, days }) {
  return (
    <div>
      <h2 className='font-extrabold text-5xl sm:text-6xl italic'><span className='text-[#854dff]'>{years}</span> years</h2>
      <h2 className='font-extrabold text-5xl sm:text-6xl italic'><span className='text-[#854dff]'>{months}</span> months</h2>
      <h2 className='font-extrabold text-5xl sm:text-6xl italic'><span className='text-[#854dff]'>{days}</span> days</h2>
    </div>
  )
}
