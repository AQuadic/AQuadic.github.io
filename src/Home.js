import React from 'react'

import Projects from './component/Projects';

import Technologies from './component/Technologies';
import About from './component/About';
import Testimonials from './component/Testimonials';
import Message from './component/Message';
import Services from './component/Services';
import Odometer from './component/Odometer';
import Clients from './component/Clients';
import Business from './component/Business';
import data from './data/projects.json'
import Dots from './component/Dots';

function Home() {

    return (
        <>
            <Dots/>
            <Business/>

            <About/>
            <Odometer/>
            <Services/>
            <Projects all_data={data}/>
            <Technologies/>
            <Clients/>
            <Testimonials/>
            <Message/>
        </>
    )
}

export default Home