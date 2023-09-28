import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedPage from '../Components/AnimatedPage'
import { useStore } from '../Store/AlphaStore'
import { callModal } from '../Utils/toast';
import { toast } from "react-toastify";
import { callController } from '../Utils/endpointHandler';
import { useNavigate  } from 'react-router-dom';

function Register() {
  const history = useNavigate ();
    const { auth, setAuth, isLogin, setIsLogin } = useStore();
    const [checkInput, setCheckInput] = useState(false)
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [bars, setBars] = useState<number>(0)
    const calculatePasswordStrength = (password:string):void => {
      // Initialize a score for the password
      let score = 0;
    
      // Add points for password length
      if (password.length >= 8) {
        score += 2;
      } else if (password.length > 3) {
        score += 1;
      }
    
      // Add points for containing both uppercase and lowercase letters
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        score += 3;
      }
    
      // Add points for containing numbers
      if (/\d/.test(password)) {
        score += 3;
      }
    
      // Add points for containing special characters
      if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        score += 3;
      }
    
      // Categorize the password strength
      console.log('score', score, password)
      setBars(score)
    };
  
  
    useEffect(() => {
      sessionStorage.removeItem('stellarAuth')
      setIsLogin(false)
      return () => {
        setAuth('')
      }
    }, [])
    
    
  return (
    <AnimatedPage name="signin-1">
        <section className="h-screen w-screen flex justify-center">
  <div className="container h-full px-6 py-24">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      
      
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image" />
      </div>

      
      
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
        <form>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded placeholder:color-[black] border-[#52525290] border-[0.5px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="firstname"
              placeholder="First Name" 
              name="First Name" 
              value={firstName}
                      onChange={(e)=>{
                        setFirstName(e.target.value)
                      }}/>
            <label 
              className="text-[#272727a3] bg-white px-1 pointer-events-none absolute left-3 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >First Name
            </label>
          </div>
          
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded placeholder:color-[black] border-[#52525290] border-[0.5px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="lastname"
              placeholder="Last Name" 
              name="Last Name" 
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}/>
            <label 
              className="text-[#272727a3] pointer-events-none absolute left-3 top-[2px] bg-white mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >Last Name
            </label>
          </div>
          
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded placeholder:color-[black] border-[#52525290] border-[0.5px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="email"
              placeholder="Email address"
              name="Email address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />
            <label 
              className="text-[#272727a3] pointer-events-none absolute left-3 top-[2px] bg-white mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>

          
          
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full  border-[#52525290] border-[0.5px] rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
                calculatePasswordStrength(e.target.value);
              }}
              
            />
            <label
              className="text-[#272727a3] pointer-events-none absolute left-3 top-[2px] bg-white mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >Password
            </label>
            <div className="flex items-center my-3">
              <div className={`flex-1 ${bars <1 ? 'bg-[#888888]' : 'bg-[#ff1d1d64]'} bg-active-success rounded h-[5px] me-2`}></div>
              <div className={`flex-1 ${bars < 4 ? 'bg-[#888888]' : 'bg-[#7aff816f]'} bg-active-success rounded h-[5px] me-2`}></div>
              <div className={`flex-1 ${bars < 8 ? 'bg-[#888888]' : 'bg-[#00ff048c]'} bg-active-success rounded h-[5px] me-2`}></div>
              <div className={`flex-1 ${bars < 10 ? 'bg-[#888888]' : 'bg-[#13ff23e4]'} bg-active-success rounded h-[5px]`}></div>
            </div>
          </div>
          
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full  border-[#52525290] border-[0.5px] rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput33"
              placeholder="Password" 
              name="Password" 
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <label
              className="text-[#272727a3] pointer-events-none absolute left-3 top-[2px] bg-white mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >Confirm Password
            </label>
          </div>

          
          
          <div className="mb-6 flex items-center justify-between">
            <div className="hidden mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck3"
                      checked={checkInput}
                      onChange={(e) => setCheckInput(e.target.checked)}
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                        
                </div>
            
            <a
              href="#!"
              className="hidden text-[#6f6fdb] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Forgot password?</a >
            
          </div>

          
          
          <button
            type="submit"
            className="mb-2 cursor-pointer inline-block bg-[#34346fb9] w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={async(e)=>{
              e.preventDefault();
              if(confirmPassword != password)return callModal("Passwords do not match")
              const log:any = toast.loading('Validating inputs')
              let data = {
                firstname:firstName,
                lastname:lastName,
                email,
                password
              }
              const loginaction =(result:any):void=>{
                if(!result)return setIsLogin(false)
                history('/')
                sessionStorage.setItem('stellarAuth', result.token.toString())
                setAuth(result.token.toString())
                setIsLogin(true);   
              }
              callController(log, 'auth/register', 'post', data, ['firstname', 'lastname', 'email', 'password', 'confirmpassword'], loginaction, 'Login Successful', 'Registration failed')
            }}
            >
            Sign Up
          </button>

          <Link to="/"
              className="text-[#2c8cbf] cursor-pointer mt-[10px] text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >have an account? Sign In.</Link>
        </form>
      </div>
    </div>
  </div>
</section>
    </AnimatedPage>
  )
}

export default Register