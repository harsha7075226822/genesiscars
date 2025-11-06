import React, { useState, useEffect } from 'react'

const slides = [
  {
    src: 'https://www.hdcarwallpapers.com/walls/genesis_g90_black_2024_8k-HD.jpg',
    title: 'GENESIS GV 80 BLACK',
  },
  {
    src: 'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/1184000/0/1184029.jpg?q=50&fit=crop&w=750&h=422&dpr=1.5',
    title: 'GV 80 COUPE',
  },
  {
    src: 'https://res.cloudinary.com/dcttatiuj/image/upload/v1730527671/Screenshot_2024-11-02_113732_w2qvo0.png',
    title: 'GV 80 COUPE',
  },
  {
    src: 'https://en.wheelz.me/wp-content/uploads/2024/10/241002-lsquogv80middotgv80rsquo-4.webp',
    title: 'GENESIS GV COUPE BLACK',
  },
  {
    src: 'https://res.cloudinary.com/dcttatiuj/image/upload/v1730528058/Screenshot_2024-11-02_114308_g8mmu8.png',
    title: 'GENESIS ELECTRIFIED GV 80',
  },
  {
    src: 'https://d2046fb22nsf40.cloudfront.net/2023/04/2023-Genesis-GV80-Coupe-Concept-5.jpg',
    title: 'GENESIS GV MAGMA',
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  // Manual controls
  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  // 🕒 Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000) // change every 5 seconds

    return () => clearInterval(timer) // cleanup
  }, [])

  return (
    <section id="home" className="pt-16">
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide text-white drop-shadow-lg">
            {slides[index].title}
          </h1>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </section>
  )
}
