import './App.css'

import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/NavBar/NavBar'

import glasses from "./assets/images/glasses.jpg"
import coders from "./assets/images/coders.jpg"




function App() {


  return (
    <>
      <NavBar />
      <main className='cardContainer'>
        <Card text="Postulantes" image={glasses} />
        <Card text="Admitidos" image={coders} />
      </main>

      <Footer />
    </>
  )
}

export default App
