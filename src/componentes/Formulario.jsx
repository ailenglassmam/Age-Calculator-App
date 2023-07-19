import React from 'react'
import arrow from '../assets/images/icon-arrow.svg'

export default function Formulario({ setYears, setMonths, setDays, handleCalculator }) {

  const handleDays = (e) => {
    setDays(e.target.value);
  }

  const handleMonths = (e) => {
    setMonths(e.target.value);
  }

  const handleYears = (e) => {
    setYears(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCalculator();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex gap-4'>
        <div>
          <label htmlFor="days" className="block mb-2 text-xs font-bold uppercase text-[#716f6f]">Day</label>
          <input type="number" name="day" id="day" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#854dff] focus:border-[#854dff] block w-full p-2.5" min="1" max="31" required onChange={handleDays} />
        </div>
        <div>
          <label htmlFor="months" className="block mb-2 text-xs font-bold uppercase text-[#716f6f]">Month</label>
          <input type="number" name="month" id="month" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#854dff] focus:border-[#854dff] block w-full p-2.5" min="1" max="12" required onChange={handleMonths} />
        </div>
        <div>
          <label htmlFor="years" className="block mb-2 text-xs font-bold uppercase text-[#716f6f]">year</label>
          <input type="number" name="year" id="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#854dff] focus:border-[#854dff] block w-full p-2.5" min="1700" max="2023" required onChange={handleYears} />
        </div>
      </div>
      <div className='flex my-4 justify-center items-center sm:justify-end'>
        <div className='sm:flex-auto w-full my-8 border border-b-[#dbdbdb]'></div>
        <button type="submit" className='sm:flex-auto absolute bg-black hover:bg-[#854dff] transition-colors p-3 sm:p-5 rounded-full' onClick={handleCalculator}><img src={arrow} alt="submit" /></button>
      </div>
    </form>
  )
}
