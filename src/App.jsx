import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import React from 'react'

const App = () => {
  return (
    <BrowserRouter >
      <div className='bg-hero-pattern bg-cover '>
        <div className='snap-y snap-mandatory scroll-smooth h-screen overflow-scroll'>
          <Hero />
          <About />
          {/* <Experience /> */}
          <Tech />
          {/* <Works /> */}
          {/* <Feedbacks /> */}

          <Contact />
          {/* <Works /> */}
          {/* <StarsCanvas /> */}
        </div>


      </div>
    </BrowserRouter>

  )
}

export default App