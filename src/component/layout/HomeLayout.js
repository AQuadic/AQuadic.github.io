import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

function HomeLayout() {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default HomeLayout