import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/navbar.jsx'
import Header from './components/header'
import Project from './components/projects.jsx'
import Contact from './components/contact'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Contact />
    </>
  )
}

export default App
