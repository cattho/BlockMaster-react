import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Allmovies from '../components/Allmovies'
import MasValoradas from '../components/MasValoradas'
import MenosValoradas from '../components/MenosValoradas'
import NavBar from '../components/NavBar'
import RegisPeli from '../components/RegisPeli'
import Slider from '../components/Slider'

const DashboardRouter = () => {
  return (
    <div>
        <NavBar />
        <Slider />
        <Routes>
            <Route path='/' element={<Allmovies />} />
            <Route path='/masvaloradas' element={<MasValoradas />} />
            <Route path='/menosvaloradas' element={<MenosValoradas />} />
            <Route path='/registroPeli' element={<RegisPeli />} />
            <Route path='*' element={<Navigate to={'/'} />} />
            
        </Routes>
    </div>
  )
}

export default DashboardRouter