import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Section7 from './components/section7'
import Section8 from './components/section8'

import './App.css'

function App() {
  return (
    <div className="landing-wrapper">
      <section id="home"><Section1 /></section>
      <section id="about"><Section2 /></section>
      <Section3 />
      <section id="projects"><Section4 /></section>
      <Section5 />
      <Section6 />
      <Section7 />
      <section id="book"><Section8 /></section>
    </div>
  )
}

export default App