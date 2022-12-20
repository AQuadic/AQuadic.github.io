import React from 'react'

import Animation1 from './component/Animation1';

import Projects from './component/Projects';

import Technologies from './component/Technologies';
import About from './component/About';
import Testimonials from './component/Testimonials';
import Message from './component/Message';
import Services from './component/Services';
import Odometer from './component/Odometer';
import Clients from './component/Clients';
function Home() {
  return (
    <>
      <Animation1/>
                <About/>
                <Odometer/>
                <Services/>
                <Projects/>
                <Technologies/>
                <Clients/>
                <Testimonials/>
                <Message/>
    </>
  )
}

export default Home