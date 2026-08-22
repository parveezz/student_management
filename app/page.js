import HeroLanding from '@/components/Homepage/HeroLanding'
import FeaturedBook from '@/components/Homepage/FeaturedBook'
import PopularBooks from '@/components/Homepage/PopularBooks'
import React from 'react'

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-[#080b14] pt-4">
        <HeroLanding />
        <FeaturedBook />
        <PopularBooks />
      </main>
    </>
  )
}

export default page