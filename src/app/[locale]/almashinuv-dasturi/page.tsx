import Contact from '@/app/components/home/Contact'
import ScientificCards from '@/app/components/exchange-program/ScientificCards'
import ScientificHero from '@/app/components/exchange-program/ScientificHero'
import React from 'react'

const ExchangeProgram = () => {
  return (
    <div>
      <ScientificHero/>
      <ScientificCards/>
      <Contact/>
    </div>
  )
}

export default ExchangeProgram
