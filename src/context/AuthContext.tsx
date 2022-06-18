import React, { useContext, createContext, useEffect } from 'react'
import { useState } from 'react';

import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

export const authContext = createContext<any>('')

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}



export const AuthProvider = ( {children}: any) => {

    const [user, setUser] = useState<any>(null)

    const signup = (email: string, password: string) => 
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email: string, password: string) => 
        signInWithEmailAndPassword(auth, email, password)
        
    const logOut = () => signOut(auth)
    useEffect(() => {
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
      })
    }, [])
    

    return (
    <authContext.Provider value={{signup, login, user, logOut}}>
        {children}
    </authContext.Provider>
  )
}
