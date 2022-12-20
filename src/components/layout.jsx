import Header from './header'
import Footer from './footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   body {
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    font-size: 24px;
   }
`

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header />
            <main>
                {children} <Outlet />{' '}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
