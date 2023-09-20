import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../Store/AlphaStore'
import { UserContext } from '../App'

export const animationsdifffamily = {
    initial: { opacity: 0, x: 0},
    animate: { opacity: 1, x: 0},
    exit: { opacity: 0, x: 0}
}
const animationsmoveforward = {
    initial: { opacity: 0, x: 100},
    animate: { opacity: 1, x: 0},
    exit: { opacity: 0, x: -100}
}
const animationsmovebackward = {
    initial: { opacity: 0, x: -100},
    animate: { opacity: 1, x: 0},
    exit: { opacity: 0, x: 100}
}

function AnimatedPage({ children, name }:any) {
    const user = useContext(UserContext);
    console.log('user', user)
    // const {animationName, setAnimationName, family, setfamily, familyNo, setfamilyNo} = useContext(UserContext);
    const {animationName, setAnimationName, family, setfamily, familyNo, setfamilyNo} = useStore();
    useEffect(()=>{
        if(!animationName){
            setAnimationName(animationsdifffamily)
        }
    },[animationName]);

    const handleTransitions =(state:string):void=>{
        if(state == 'differentpages'){
            setAnimationName(animationsdifffamily)
        }
        if(state == 'samefamilyforward'){
            setAnimationName(animationsmoveforward)
        }
        if(state == 'samefamilybackwards'){
            setAnimationName(animationsmovebackward)
        }
        setfamily(name.split('-')[0].toString())
        setfamilyNo(name.split('-')[1].toString())
        console.log('the name is end', name, family, familyNo)
    }

    useEffect(()=>{
        console.log('the name is start', name, family, familyNo)
        
        if(family=='' && familyNo==''){
            setfamily(name.split('-')[0].toString());
           setfamilyNo(name.split('-')[1].toString());
           console.log(name.split('-')[0].toString(), name.split('-')[1].toString())
          return console.log('the name is fresh', name, family, familyNo)
        }else if(name.split('-')[0] != family){
            return handleTransitions('differentpages')
        }else if(name.split('-')[0] == family){
            if(Number(name.split('-')[1]) > Number(familyNo)){
                return handleTransitions('samefamilyforward')
            }else if(Number(name.split('-')[1]) < Number(familyNo)){
                return handleTransitions('samefamilybackwards')
            }
        }
        
    },[familyNo, family])
  return (
    <>
        <motion.div variants={animationName} initial="initial" animate="animate" exit="exit" transition={{duration: 0.4}}>
            {children}
        </motion.div>
    </>
  )
}

export default AnimatedPage;