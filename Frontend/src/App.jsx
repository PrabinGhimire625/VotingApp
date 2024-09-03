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
import Level1 from './pages/candidate/candidateCategory/Level1'
import Level2 from './pages/candidate/candidateCategory/Level2'
import Level3 from './pages/candidate/candidateCategory/Level3'
import LevelAll from './pages/candidate/candidateCategory/LevelAll'
// import CandidateLanding from './pages/candidate/candidateLanding/CandidateLanding'
import SingleCandidate from './pages/candidate/singleCandidate/SingleCandidate'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/level1' element={<Level1/>}/>
          <Route path='/level2' element={<Level2/>}/>
          <Route path='/level3' element={<Level3/>}/>
          <Route path='/levelAll' element={<LevelAll/>}/>
          {/* <Route path='/CandidateLanding' element={<CandidateLanding/>}/> */}
          <Route path='/singleCandidate/:id' element={<SingleCandidate/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
