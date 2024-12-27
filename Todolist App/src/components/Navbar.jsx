import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-950 text-white py-4 m-1 mx-10 rounded-xl w-[90%]'>
      <div className="loogo">
        <span className='font-bold mx-5'>Itask</span>
      </div>
      <ul className='flex gap-5 mx-4'>
        <li className='cursor:"pointer" hover:font-bold transition-all duration-50'>Home</li>
        <li className='cursor:"pointer" hover:font-bold transition-all duration-50'>Home</li>
        <li className='cursor:"pointer" hover:font-bold transition-all duration-50'>Home</li>
      </ul>
    </nav>
  )
}

export default Navbar
