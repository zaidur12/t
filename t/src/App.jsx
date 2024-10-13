import './App.css'
import Navbar from './components/Navbar/Navbar'
import Front from './components/Front/Front'
import First1 from './components/First1/First1'
import Second from './components/Second/Second'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  

  return (

    <>
  <Navbar/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default App
