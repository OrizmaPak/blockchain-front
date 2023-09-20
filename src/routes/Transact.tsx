import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../Components/AnimatedPage";
import { useStore } from "../Store/AlphaStore";
import { toast } from "react-toastify";
import { callController } from "../Utils/endpointHandler";

function Transact() {
  const [recipintAddress, setRecipintAddress] = useState('')
  const [Amount, setAmount] = useState('')
  const [fee, setFee] = useState(0)
  return (
    <AnimatedPage name="trans-0">
      <div className="h-screen w-screen flex justify-center overflow-x-hidden">
        <div className="container m-auto">
          <div className="flex justify-center px-1 my-12">
            <div className="w-full h-[80vh] flex">
              <div
                className="w-full h-auto  bg-gray-400 hidden lg:block lg:w-7/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage: "url('transfer.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <div className="w-full lg:w-5/12 my-auto bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center uppercase font-bold">
                  Make a transfer
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      id=""
                      title="Enter the receiver's public key"
                      >
                      Recipient Address
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="transferaddress"
                      type="text"
                      placeholder="Enter Reciever Address"
                      name="Recipient Address"
                      value={recipintAddress}
                      onChange={(e)=>{setRecipintAddress(e.target.value)}}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        id=""
                      >
                        Amount
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="transferamount"
                        type="number"
                        placeholder="Amount"
                        name="Amount"
                        value={Amount}
                        onChange={(e)=>{setAmount(e.target.value);let x = Number(Amount)/10;setFee(x)}}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        id="c_password"
                      >
                        Fee
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="transferfee"
                        type="number"
                        placeholder=""
                        name="fee"
                        value={fee}
                        onChange={(e)=>setFee(parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                    onClick={async(e)=>{
                      e.preventDefault();
                      const log:any = toast.loading('Validating inputs')
                      let data = {
                        address: recipintAddress,
                        amount: String(Amount)
                      }
                      const transactionaction =(result:any)=>{
                          if(!result)return 
                          
                      }
                      callController(log, 'account/transfer', 'post', data, ['transferaddress', 'transferamount'], transactionaction, 'Transaction Complete', 'Transaction Failed')
                    }}
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Transfer
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Transact;
