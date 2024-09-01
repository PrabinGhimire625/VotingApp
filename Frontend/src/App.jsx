import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import store from './store/store'
import { Provider } from 'react-redux'
import Navbar from './globals/navbar/Navbar'
import Profile from './pages/auth/profile/Profile'
import Footer from './globals/footer/Footer'
import Landing from './pages/landing/Landing'
import SchoolLevel from './pages/Components/SchoolLevel'
import Teamlevel from './pages/Components/Teamlevel'
import ClassLevel from './pages/Components/ClassLevel'
import Other from './pages/Components/Other'
import LevelLanding from './pages/Components/levelLanding/LevelLanding'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/schoolLevel' element={<SchoolLevel/>}/>
          <Route path='/teamLevel' element={<Teamlevel/>}/>
          <Route path='/classLevel' element={<ClassLevel/>}/>
          <Route path='/other' element={<Other/>}/>
          <Route path='/levelLanding' element={<LevelLanding/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
