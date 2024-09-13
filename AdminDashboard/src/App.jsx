import './App.css'
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import Landing from './pages/landing/Landing'
import Tables from './pages/sidebar/Tables/Tables'
import { Provider } from 'react-redux'
import store from './store/store'
import Navbar from './globals/navbar/Navbar'
import Login from './pages/auth/Login/Login'
import AddCandidate from './pages/form/AddCandidate'
import AddCategory from './pages/form/AddCategory'
import AddParty from './pages/form/AddParty'
import UpdateCategory from './pages/form/update/UpdateCategory'
import UpdateParty from "./pages/form/update/UpdateParty"
import UpdateCandidate from './pages/form/update/UpdateCandidate'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tables' element={<Tables/>}/>
          <Route path='/addCandidate' element={<AddCandidate/>}/>
          <Route path='/addCategory' element={<AddCategory/>}/>
          <Route path='/addParty' element={<AddParty/>}/>
          <Route path='/updateCategory/:id' element={<UpdateCategory/>}/>
          <Route path='/updateParty/:id' element={<UpdateParty/>}/>
          <Route path='/updateCandidate/:id' element={<UpdateCandidate/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

