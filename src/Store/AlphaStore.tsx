import { create } from "zustand";
import { Variants } from 'framer-motion';

interface GenerateUseStore {
    isLoading: Boolean
    setIsLoading: (isLoading: boolean) => void
    isLogin: Boolean
    setIsLogin: (isLogin: boolean) => void
    animationName: Variants
    setAnimationName: (animationName: Variants) => void
    family: string
    setfamily: (family: string) => void
    auth: string
    setAuth: (auth: string) => void
    familyNo: string
    setfamilyNo: (familyNo: string) => void
    mobileNav: boolean
    setmobileNav: (mobileNav: boolean) => void
}


export const useStore = create<GenerateUseStore>()((set)=>({    
    isLoading: false,
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    animationName: {
        initial: { opacity: 0, x: 0},
        animate: { opacity: 1, x: 0},
        exit: { opacity: 0, x: 0}
    },
    setAnimationName: (animationName: Variants) => set({ animationName }),
    family: '',
    setfamily: (family: string) => set({ family }),
    auth: '',
    setAuth: (auth: string) => set({ auth }),
    familyNo: '',
    setfamilyNo: (familyNo: string) => set({ familyNo }),
    mobileNav: false, 
    setmobileNav: (mobileNav: boolean) => set({ mobileNav }),
    isLogin: false,
    setIsLogin: (isLogin: boolean) => set({ isLogin })
}))