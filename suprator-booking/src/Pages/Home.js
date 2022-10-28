import React from 'react';
import FirstSection from '../components/HomePage/FisrtSection'
import Footer from '../components/Footer'
import SecondSection from '../components/HomePage/SecondSection';
import ThirdSection from '../components/HomePage/ThirdSection';

const Home = () => {
  return (
    <div>
        <FirstSection/>
        <SecondSection />
        <ThirdSection/>
        <Footer/>
    </div>
  )
}

export default Home
