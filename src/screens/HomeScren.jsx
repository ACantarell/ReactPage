import React from 'react'
import { Navbar } from '../components/header/Navbar'
import {Hero } from '../components/hero/Hero'
import { Category } from '../components/category/Category'
import { Footer } from '../components/footer/Footer'
import { ProductsMaps } from '../components/products/producMap/ProductsMaps'


export const HomeScren = () => {
  return (
    <div>
  
      <Navbar />
      <Hero/>
      <Category/>
      <ProductsMaps/>
      <Footer/>
    </div>
  )
}
