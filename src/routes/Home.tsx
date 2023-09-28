import React from 'react'
import { Link } from 'react-router-dom'
import Balance from '../Components/Balance'

function Home() {
  return (
    <>
        <section className="relative  bg-blueGray-50">
<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')"
        }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-screen px-4 ml-auto mr-auto text-center">
              
              <Balance />

              <div className="pr-12">
                <h1 className="text-white mt-[180px] font-semibold text-5xl">
                  Welcome to Petrong Software.
                </h1>
                <p className="mt-4 text-lg text-blueGray-200 text-white">
                  This is a cross border payment platform under developement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0px)"}}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        {/* <div className="container mx-auto px-4"> */}
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Transactions</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    View your transaction histories and keep track of your financial activities.
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Account History
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Transfer funds</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    we understand the importance of seamless and secure fund transfers.
                  </p>
                  <Link to="/transact"><button className="bg-[#64d43c] hover:bg-[#246839] text-white font-bold py-2 px-4 rounded">
                    Send Money
                  </button></Link>
                  
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Stream Transactions</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  The ability to see processed transactions in real-time is crucial. 
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Stream transactions
                  </button>
                </div>
              </div>
            </div>
          </div>
           <footer className="relative  pt-8 pb-6 mt-1">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
      </div>
    </div>
  </div>
</footer>
      </section>
      </section>
    </>
  )
}

export default Home