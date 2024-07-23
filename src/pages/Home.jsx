import React from 'react'
import HeroSections from '../Sections/HeroSections'
import Problem from '../Sections/Problem'
import Issues from '../Sections/Issues'
import Solution from '../Sections/Solution'
import Footer from '../Sections/Footer'

export default function Home() {
  return (
    <div>
        <HeroSections/>
        <Problem/>
        <Issues/>
        <Solution/>
        <Footer cta={true}/>
    </div>
  )
}
