import React, { useContext, createContext, useEffect } from 'react'
import { useState } from 'react';

import { auth, database } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

import {ref, onValue, set} from 'firebase/database'

export const authContext = createContext<any>('')

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}


export const AuthProvider = ( {children}: any) => {

    const [user, setUser] = useState<any>(null)
    const [search, setSearch] = useState<any>('')
    const [ciudadano, setCiudadano] = useState<any>(null)
    const [ciudadanos, setCiudadanos] = React.useState<any>([
      {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Elizabeth",
        age: 25,
        street: "street",
        rating: [{
          ciudadanos: 'elizabeth',
          rating: 5
        }],
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Elizabeth",
        age: 25,
        street: "street",
        rating: 5,
      },
    ]);

    // set(ref(database, 'ciudadanos/6'), {
    //   avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    //   name: "Martin",
    //   age: 31,
    //   street: "Culiacan, Sinaloa",
    //   rating: [{
    //     ciudadanos: 'elizabeth',
    //     rating: 5
    //   }],
    // });

    

    const getCiudadanos = () => {
      const listRef = ref(database, 'ciudadanos')
      onValue(listRef,(snapshot) => {
        const listAux = snapshot.val()
        const list = Object.keys(listAux).map(id => {
          return {id,...listAux[id]}
        })
        setCiudadanos(list || [])
      })
    }
    const getCiudadanoId = (id: any) => {
      const listRef = ref(database, `ciudadanos/${id}`)
      onValue(listRef,(snapshot) => {
        const ciudadano = snapshot.val()
        setCiudadano(ciudadano)
      })
    }

    const signup = (email: string, password: string) => 
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email: string, password: string) => 
        signInWithEmailAndPassword(auth, email, password)
        
    const logOut = () => signOut(auth)
    useEffect(() => {
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
      })
      getCiudadanos()
    }, [])
    
    const value = { 
      signup, 
      login, 
      user, 
      logOut, 
      ciudadanos, 
      setCiudadanos,
      ciudadano, 
      setCiudadano,
      getCiudadanoId,
      search, 
      setSearch
    }

    return (
    <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
  )
}