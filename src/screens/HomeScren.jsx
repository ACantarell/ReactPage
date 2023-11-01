import React from 'react'
import { Navbar } from '../components/header/Navbar'
import {Hero } from '../components/hero/Hero'
import { Category } from '../components/category/Category'
import { Product } from '../components/products/Product'
import { Footer } from '../components/footer/Footer'

export const HomeScren = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Category/>
      <Product/>
      <Footer/>
    </div>
  )
}
