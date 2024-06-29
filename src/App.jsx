import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Welcome to my website</h1> */}
      {/* <button className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg">Hire me</button> */}

      <Header />
      <Banner />
      <About  />
      <Services />
      <Expertise />
      <Footer />
    </>
  )
}

export default App