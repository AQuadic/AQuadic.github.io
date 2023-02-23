import React from 'react'
import Forminfo from './Forminfo'
import Imageheader from './Imageheader'
import Advantages from './Advantages'
import Join from './Join'
import Positions from './Positions'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Career() {
    return (
        <>
        <HelmetProvider>

        
         <Helmet>
        
        <title>Career</title>
        <link rel="canonical" href="https://aquadic.com/career"  />
        <meta
      name="description"
      content="Aquadic is a design and digital product development company. We create beautiful and functional web platforms, apps, and custom software solutions. we build projects for companies in different locations, and we always open to any business relationship."
    />
      </Helmet>
            <Imageheader/>
            <Join/>
            <Advantages/>
            <Positions/>
            <Forminfo/>
            </HelmetProvider>
        </>
    )
}

export default Career