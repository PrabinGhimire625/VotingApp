import './App.css'
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import Landing from './pages/landing/Landing'
import Tables from './pages/sidebar/Tables/Tables'
import { Provider } from 'react-redux'
import store from './store/store'
import Navbar from './globals/navbar/Navbar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/tables' element={<Tables/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

