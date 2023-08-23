import './App.css'

import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/NavBar/NavBar'

import { Postulantes } from './pages/Postulantes/Postulantes'

import { Admitidos } from './pages/Admitidos/Admitidos';

import glasses from "./assets/images/glasses.jpg"
import coders from "./assets/images/coders.jpg"
import { Button } from './components/Button/Button'
import { CoderCard } from './components/CoderCard/CoderCard'





function App() {


  return (
    <>
      <NavBar />
      <main className='cardContainer'>
        {/* <Home/> */}
        {/* <Postulantes /> */}
        <Admitidos/>


        {/* <Button text="ADMITIR" style="btnOrange"/>
        <Button text="EN ESPERA" style="btnPaleOrange"/>
        <Button text="RECHAZAR" style="btnOutline"/> */}

        {/* <CoderCard imagen={glasses} nombre="Maite" apellidos="Presa Arribas" dni="XXXXXXXX-X"
                    bootcamp="FEM" estado="completo" porcentaje="100" showImage={true} /> */}
        

      </main>

      <Footer />
    </>
  )
}

export default App
