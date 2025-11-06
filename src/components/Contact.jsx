import React from 'react'

export default function Contact() {
  return (
    <footer id="contactus" className="bg-black border-t border-neutral-800">
      <div className="container-fluid py-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-neutral-300 mb-6">We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
          <form className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm">Full Name</span>
              <input type="text" placeholder="Your full name" required className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-600" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm">Email</span>
              <input type="email" placeholder="Your email" required className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-600" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm">Feedback</span>
              <textarea rows="4" placeholder="Your Feedback" required className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-600" />
            </label>
            <button type="submit" className="bg-neutral-100 text-neutral-900 px-4 py-2 rounded font-medium w-fit">Send Message</button>
          </form>
        </div>
        
      </div>
    </footer>
  )
}
