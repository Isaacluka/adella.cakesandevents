import React from 'react'
import { navLists } from '..'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            
            <div className="flex flex-1 justify-start">
              <h1 className='text-2xl text-orange-300'>adella.cakesandevents</h1>
            </div>
            
            <div className="flex flex-1 items-center justify-center gap-x-5 max-sm:hidden">
              {navLists.map((nav) => (
                <div key={nav} className="px-5 text-sm cursor-pointer hover:font-semibold transition-all">
                  {nav}
                </div>
              ))}               
            </div>

            <div className="flex flex-1 justify-end">
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Contact us <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar