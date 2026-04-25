import React from 'react'

const Footer = () => (
  <footer className="bg-black text-zinc-500 px-12 py-12 border-t border-zinc-800">
    <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-zinc-600">
      <span>©️ {new Date().getFullYear()} MovieVerse. All rights reserved.</span>
      <span className="text-red-600 font-semibold tracking-widest text-[10px] uppercase">Powered by StormbreakerSquad</span>
    </div>

  </footer>
)

export default Footer