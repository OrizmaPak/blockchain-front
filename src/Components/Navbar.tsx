import React from 'react'
import { useStore } from '../Store/AlphaStore'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

function Navbar() {
    const { mobileNav, setmobileNav, isLogin } = useStore()
  return (
    <div className='fixed w-[100vw] z-50'><nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    <div>
      <div className="container mx-auto flex items-center justify-between text-gray-900">
        <Link
          to="/"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
          <span>Petrong Softwares</span>
        </Link>
        <ul className="hidden items-center gap-6 lg:flex">
            {isLogin && <NavItem />}
        </ul>
        {isLogin && <Link to="/transact"><button
          className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span>Transfer</span>
        </button></Link>}
        <button
          onClick={()=>setmobileNav(!mobileNav)}
          className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          data-collapse-target="navbar"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div
        
        className={`block w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden ${mobileNav ? 'h-[200px]' : `h-0`}`}
        data-collapse="navbar"
      >
        <div className="container mx-auto pb-2">
          <ul className="mt-2 mb-4 flex flex-col gap-2 text-black">
              {isLogin && <NavItem />}
          </ul>
          {isLogin && <button
            className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <span>Transfer</span>
          </button>}
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar