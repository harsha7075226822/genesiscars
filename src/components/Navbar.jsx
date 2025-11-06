import React from 'react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const onHash = () => setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])
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
        <MobileMenuToggle open={open} setOpen={setOpen} />
      </div>
      <MobileMenuPanel open={open} setOpen={setOpen} />
    </header>
  )
}

function MobileMenuToggle({ open, setOpen }) {
  return (
    <button
      className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
      aria-controls="mobile-menu"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
    >
      <span className="sr-only">Toggle navigation</span>
      <svg
        className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
      </svg>
      <svg
        className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}

function MobileMenuPanel({ open, setOpen }) {
  return (
    <div id="mobile-menu" className={`md:hidden border-t border-neutral-800 bg-neutral-900/95 backdrop-blur ${open ? 'block' : 'hidden'}`}>
      <div className="container-fluid py-3 flex flex-col gap-3">
        <a href="#home" className="py-2 text-sm tracking-wider hover:text-white/80" onClick={() => setOpen(false)}>HOME</a>
        <a href="#sectionmodels" className="py-2 text-sm tracking-wider hover:text-white/80" onClick={() => setOpen(false)}>MODELS</a>
        <a href="#vision" className="py-2 text-sm tracking-wider hover:text-white/80" onClick={() => setOpen(false)}>GENESIS</a>
        <a href="#contactus" className="py-2 text-sm tracking-wider hover:text-white/80" onClick={() => setOpen(false)}>Contact Us</a>
        <div className="pt-2">
          <input className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600" placeholder="Search" />
        </div>
      </div>
    </div>
  )
}
