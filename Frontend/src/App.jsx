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
// import CandidateLanding from './pages/candidate/candidateLanding/CandidateLanding'
import SingleCandidate from './pages/candidate/singleCandidate/SingleCandidate'
import Party from './pages/Party/Party'
import Singleparty from './pages/Party/singleParty/Singleparty'
import CandidateLevel from './pages/Party/candidateLevel/CandidateLevel'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/party' element={<Party/>}/>
          <Route path='/singleParty/:id' element={<Singleparty/>}/>
          <Route path='/singleCandidate/:id' element={<SingleCandidate/>}/>
          <Route path='/candidateLevel' element={<CandidateLevel/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
