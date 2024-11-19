import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import MyAppointment from './pages/myAppointment'


import Appointment from './pages/Appointment'
import MyProfile from './pages/MyProfile'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/my-appointments' element={<MyAppointment/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App