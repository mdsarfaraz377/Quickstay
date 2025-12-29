import React from 'react'
import ExclusiveOffers from '../components/ExclusiveOffers'
import FeaturedDestination from '../components/FeaturedDestination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter'
import RecommendHotels from '../components/RecommendedHotels'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <Hero />
      <RecommendHotels />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
       
    </>
  )
}

export default Home
