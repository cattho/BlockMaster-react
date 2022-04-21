import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import { Register } from '../components/Register'
import DashboardRouter from './DashboardRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {

  const [cheking, setCheking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)



  useEffect(() => {
    const auth=getAuth()
    onAuthStateChanged(auth,
      (user) =>{

        if(user?.uid){       
          setIsLogged(true)
        }else{
          setIsLogged(false);
        }
        setCheking(false)
      }) 
  }, [setCheking, setIsLogged])

  
   if(cheking){
    return(
      <h1>Espere...</h1>
    )
  }

  return(
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={
            <PublicRoute isAuthenticated={isLogged}>
                <Login/>
            </PublicRoute>
          } />

          <Route path='/registro' element={
            <PublicRoute isAuthenticated={isLogged}>
              <Register/>
            </PublicRoute>
          } />

          <Route path='/*' element={
            <PrivateRoute isAuthenticated={isLogged}>
              <DashboardRouter />
            </PrivateRoute>
          } />
      </Routes>
    </BrowserRouter>
  ) 
}

export default AppRouter