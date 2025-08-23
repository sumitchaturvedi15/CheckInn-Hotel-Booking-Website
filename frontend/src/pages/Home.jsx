import React from 'react'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Offers from '../components/Offers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
        <Hero/>
        <Destination/>
        <Offers/>
        <Testimonial/>
        <NewsLetter/>
    </>
  )
}

export default Home