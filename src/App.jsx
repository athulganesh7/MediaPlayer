import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
Routes

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    {/* path for landing , home , history */}

    {/* header */}

    <Header/>
      <Routes>
        {/* / is the base of the website */}

        <Route path='/' element={<Landing/>}/> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>



      </Routes>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default App
