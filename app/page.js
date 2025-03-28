import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import About from '@/components/homepage/About'
import Explore from '@/components/homepage/Explore'
import Hero from '@/components/homepage/Hero'
import Logos from '@/components/homepage/Logos'
import Skills from '@/components/homepage/Skills'
import ThreeD from '@/components/homepage/ThreeD'
import Web from '@/components/homepage/Web'
import Works from '@/components/homepage/Works'
import React from 'react'

export const metadata = {
  title: "Isaac Okoth | Portfolio",
  description: "Explore the portfolio of Isaac Okoth, a talented graphic and digital designer specializing in branding, UI/UX, and creative digital design.",
  keywords: "graphic design, digital design, portfolio, branding, UI/UX, Isaac Okoth",
  openGraph: {
    title: "Isaac Okoth | Portfolio",
    description: "Explore the works, skills, and creative journey of Isaac Okoth.",
    url: "https://yourwebsite.com",
    siteName: "Isaac Okoth",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Isaac Okoth Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Okoth | Portfolio",
    description: "Explore the works, skills, and creative journey of Isaac Okoth.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};

export default function Home () {
  return (
    <div>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <Skills />
      <section id="portfolio"><Logos /></section>
      <Works />
      <Explore />
      <Web />
      <ThreeD />
      <section id="contact"><Footer /></section>
       </div>
  )
}
