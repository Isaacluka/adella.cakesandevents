import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='flex items-center justify-between p-6 lg:px-8'>
            <h1 className='text-2xl text-orange-300'>adella.cakesandevents</h1>
            
            <div class="hidden lg:flex lg:gap-x-12">
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Product</a>
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Features</a>
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Company</a>
            </div>

            <div class="lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Contact us <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar