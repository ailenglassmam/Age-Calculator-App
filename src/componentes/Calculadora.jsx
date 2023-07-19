import React, { useState } from 'react'
import Formulario from './Formulario'
import Resultados from './Resultados'


export default function Calculadora() {
  // Initial states are defined
  const [years, setYears] = useState('--');
  const [months, setMonths] = useState('--');
  const [days, setDays] = useState('--');

  // create a function that handles the calculation
  const handleCalculator = () => {
    const birthDate = new Date(years, months - 1, days);
    // console.log(birthDate);
    const currentDate = new Date();
    // console.log(currentDate);

    // console.log(currentDate.getTime());
    // console.log(birthDate.getTime());

    const timeDifference = currentDate.getTime() - birthDate.getTime();

    const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30.44 * 24 * 60 * 60 * 1000;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const yearsDifference = Math.floor(timeDifference / millisecondsPerYear);
    const monthsDifference = Math.floor(timeDifference / millisecondsPerMonth) % 12;
    const daysDifference = Math.floor(timeDifference / millisecondsPerDay) % 30;

    setYears(yearsDifference);
    setMonths(monthsDifference);
    setDays(daysDifference);
  };

  return (
    <section className="w-full p-4 h-[95vh] bg-[#f0f0f0] sm:p-6 md:p-8 flex justify-center">
      <div className="my-auto w-full sm:w-[480px] bg-white p-8 rounded-t-xl rounded-bl-xl rounded-br-[8rem]">
        <Formulario setYears={setYears} setMonths={setMonths} setDays={setDays} handleCalculator={handleCalculator}></Formulario>
        <Resultados years={years} months={months} days={days} ></Resultados>
      </div>
    </section>
  )
}