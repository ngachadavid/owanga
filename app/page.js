import Navbar from '@/components/global/Navbar'
import About from '@/components/homepage/About'
import Hero from '@/components/homepage/Hero'
import Logos from '@/components/homepage/Logos'
import Skills from '@/components/homepage/Skills'
import Works from '@/components/homepage/Works'
import React from 'react'

export default function Home () {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Logos />
      <Works />
       </div>
  )
}
