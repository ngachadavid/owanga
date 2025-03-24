import Navbar from '@/components/global/Navbar'
import About from '@/components/homepage/About'
import Hero from '@/components/homepage/Hero'
import Skills from '@/components/homepage/Skills'
import React from 'react'

export default function Home () {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
       </div>
  )
}
