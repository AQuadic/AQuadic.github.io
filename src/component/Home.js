import React from 'react'

import Projects from './Projects';

import Technologies from './Technologies';
import About from './About';
import Testimonials from './Testimonials';
import Message from './Message';
import Services from './Services';
import Odometer from './Odometer';
import Clients from './Clients';
import Business from './Business';
import Dots from './Dots';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {

    return (
        <>
         <HelmetProvider>
         <Helmet>
        
        <title>AQuadic Software Solutions</title>
        <link rel="canonical" href="https://aquadic.com" />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>
            <Dots/>
            <Business/>

            <About/>
            <Odometer/>
            <Services/>
            <Projects />
            <Technologies/>
            <Clients/>
            <Testimonials/>
            <Message/>
            </HelmetProvider>
        </>
    )
}

export default Home