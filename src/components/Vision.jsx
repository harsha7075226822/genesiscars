import React from 'react'

export default function Vision() {
  return (
    <section id="vision" className="py-12">
      <div className="container-fluid">
        <h1 className="text-3xl font-bold mb-6">VISION OF GENESIS</h1>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-neutral-800">
          <video src="https://res.cloudinary.com/dcttatiuj/video/upload/v1730534650/gv_video_sgycmq.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
