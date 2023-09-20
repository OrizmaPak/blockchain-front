import React from 'react'

function NavItem() {
  return (
    <>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Account History
            </a>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Stream Transactions
            </a>
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