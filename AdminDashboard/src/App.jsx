import './App.css'
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import Landing from './pages/landing/Landing'
import Tables from './pages/sidebar/Tables/Tables'
import { Provider } from 'react-redux'
import store from './store/store'
import Navbar from './globals/navbar/Navbar'
import Login from './pages/auth/Login/Login'

import SidebarForm from './pages/form/SidebarForm'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/sidebarForm' element={<SidebarForm/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

