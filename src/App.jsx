import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Models from './components/Models'
import Vision from './components/Vision'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-dvh bg-neutral-900 text-neutral-100">
      <Navbar />
      <main className='flex flex-col pt-16 md:pt-20 justify-center align-center'>
        <Carousel />
        <Models />
        <Vision />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
