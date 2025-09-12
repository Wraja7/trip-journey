import { useState } from 'react'
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Timeline from "./components/Timeline"
import Moments from "./components/Moments"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <>
      <Hero />
      <Gallery />
      <Timeline />
      <Moments />
      <Footer />
    </>
  )
}

export default App



