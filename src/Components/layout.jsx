import React from 'react'
import Nav from './nav/nav'
import Footer from './footer/footer'
import Copywrite from './copywrite/copywrite'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Nav />

          <Outlet />
      
      <Footer />
      <Copywrite />
    </>
  )
}
