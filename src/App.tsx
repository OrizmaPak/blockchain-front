import { createContext, useState, useEffect } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from './routes/Login';
import Register from './routes/Register';
import Transact from './routes/Transact';
import Navbar from './Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStore } from './Store/AlphaStore';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Histories from './routes/Histories';

export const UserContext: any = createContext({} as any);


function App() {
  const location = useLocation();

  const {isLogin, auth, setAuth, setIsLogin} = useStore();

  // useEffect(() => {
  //   // alert(sessionStorage.getItem('stellarAuth'))
  //   if(sessionStorage.getItem('stellarAuth') !== ''){
  //     let x = sessionStorage.getItem('stellarAuth')?.toString()
  //     setAuth(x?x:'')
  //     return ()=>{
  //       setIsLogin(true);
  //       // alert('inside')
  //     }
  //   }
  // }, []);
  
  // useEffect(() => {
  //   if(auth != '')sessionStorage.setItem('stellarAuth', auth.toString())
  // }, [auth]);
  
  

  return (
    <>
      {/* <BrowserRouter> */}
      {/* <UserContext.Provider value={{animationName, setAnimationName, family, setfamily, familyNo, setfamilyNo}}> */}
      <div className='overflow-x-hidden w-screen h-screen'>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            {/* {!isLogin && <Route path="/" element={<Login />} />} */}
            {!isLogin && <Route path="/register" element={<Register />} />}
            {/* {isLogin ? <Route path="/transact" element={<Transact />} /> : <Route path="/" element={<Login />} />}
            {isLogin ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />} */}
            <Route path="/" element={isLogin ? <Home /> : <Login />} />
            <Route path="/transact" element={isLogin ? <Transact /> : <Login />} />
            <Route path="/history" element={isLogin ? <Histories /> : <Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <ToastContainer />
      </div>
      {/* </UserContext.Provider> */}
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
