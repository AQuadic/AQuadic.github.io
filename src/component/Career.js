import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Forminfo from './Forminfo'
import Imageheder from './Imageheder'
import Advantages from './Advantages'
import Join from './Join'
import Positions from './Positions'
function Career() {
  return (
   <>
   <Imageheder/>
   <Join/>
   <Advantages/>
   <Positions/>
   <Forminfo/>
   </>
  )
}

export default Career