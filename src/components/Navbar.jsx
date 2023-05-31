import React from 'react'
import Avatar from '../assets/img/avatar.jpg'

const Navbar = () => {
  return (
    <header className="sticky top-0 w-screen h-[64px] bg-white pl-72 border-b-2 flex flex-row" aria-label="Sidebar">
      <nav className='flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8'>
        <div className='w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3'>
          <div className="hidden sm:block">
            {/* search */}
          </div>
          <div className="flex flex-row items-center justify-end gap-2 border-l-2">
            <div className="relative inline-flex ml-6">
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar