import React from 'react'
import { Navbar } from '../components/header/Navbar'
import {Hero } from '../components/hero/Hero'
import { Footer } from '../components/footer/Footer'

export const HomeScren = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Footer/>
    </div>
  )
}
