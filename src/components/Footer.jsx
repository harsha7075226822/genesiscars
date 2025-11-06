import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="container-fluid py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <details>
            <summary className="cursor-pointer uppercase tracking-wider text-sm">MODELS</summary>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>G90 Black</li>
              <li>GV80 Coupe Black</li>
              <li>G90 Long Wheel Base</li>
              <li>Electrified G80</li>
              <li>GV80 Coupe</li>
              <li>Electrified GV70</li>
              <li>Concept Car Overview</li>
            </ul>
          </details>
        </div>
        <div>
          <details>
            <summary className="cursor-pointer uppercase tracking-wider text-sm">Experience</summary>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li><a href="#">Space</a></li>
              <li><a href="#">Track Taxi Nordschleife</a></li>
            </ul>
          </details>
        </div>
        <div>
          <details>
            <summary className="cursor-pointer uppercase tracking-wider text-sm">Support</summary>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Download Center</a></li>
            </ul>
          </details>
        </div>
        <div>
          <details>
            <summary className="cursor-pointer uppercase tracking-wider text-sm">GENESIS</summary>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li><a href="#">The Brand</a></li>
              <li><a href="#">Art Initiatives</a></li>
            </ul>
          </details>
        </div>
        <div className='flex flex-col w-[90vw] justify-center items-center'>
          <div className="mt-10 flex items-center gap-4">
            <img src="https://www.genesis.com/etc.clientlibs/genesis-p2/global/clientlibs/clientlib-basepage/resources/images/logo.png" alt="Genesis Logo" className="h-6" />
          </div>
          <p className="text-neutral-400 text-sm">© Copyright 2024 Hyundai Motor Company.</p>
          <p className="text-neutral-400 text-sm">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
