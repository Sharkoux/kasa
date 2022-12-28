import Header from './header'
import Footer from './footer'
import Home from '../pages/Home'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import CallFetch from './useCallFetch'
import { useEffect, useState } from 'react'

const GlobalStyle = createGlobalStyle`
   body {
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    font-size: 24px;
    margin: auto;
    max-width: 1700px;
   
   }
   a {
    text-decoration: none;
   }
   *{
    box-sizing: border-box;
   }
   
`

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header />
            <main>
                {children}
                <Outlet />{' '}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
