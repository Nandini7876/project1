import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Menu from '../components/Menu'
import Qualities from '../components/Qualities'
import Footer from '../components/Footer'
import Reservation from '../components/Reservation'
import Team from '../components/Team'
import WhoAreWe from '../components/WhoAreWe'


const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Menu></Menu>
      <Qualities></Qualities>
      <Footer></Footer>
      <Reservation></Reservation>
      <Team></Team>
      <WhoAreWe></WhoAreWe>
    </>
  )
}

export default Home;
