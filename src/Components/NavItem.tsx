import React from 'react'
import { Link } from 'react-router-dom'

function NavItem() {
  return (
    <>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <Link to="/history" className="flex items-center" >
              Account History
            </Link>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <Link to="/" className="flex items-center">
              Stream Transactions
            </Link>
          </li>
          {/* <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Blocks
            </a>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Docs
            </a>
          </li> */}
    </>
  )
}

export default NavItem