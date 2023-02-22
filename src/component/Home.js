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

function Home() {

    return (
        <>
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
        </>
    )
}

export default Home