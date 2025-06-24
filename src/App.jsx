import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { GuestNavbar } from './components/GuestNavbar'
import { Services } from './pages/Services'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'

function App() {
  

  return (
    <>
      <GuestNavbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/services' Component={Services}/>
        <Route path='/aboutme' Component={AboutMe}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </>
  )
}

export default App
