import './App.css'
/* import Header from './components/Header/Header'
import Button from './components/Button/Button'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer/Footer' */
import { RouterProvider } from 'react-router-dom'
import router from './Router'


function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
