import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
      <div className="container-fluid flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <img src="https://www.genesis.com/etc.clientlibs/genesis-p2/global/clientlibs/clientlib-basepage/resources/images/logo.png" alt="Genesis" className="h-6" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-white/80 text-sm tracking-wider">HOME</a>
          <a href="#sectionmodels" className="hover:text-white/80 text-sm tracking-wider">MODELS</a>
          <a href="#vision" className="hover:text-white/80 text-sm tracking-wider">GENESIS</a>
          <a href="#contactus" className="hover:text-white/80 text-sm tracking-wider">Contact Us</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <input className="bg-neutral-800 border border-neutral-700 rounded px-3 py-1.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600" placeholder="Search" />
        </div>
      </div>
    </header>
  )
}

