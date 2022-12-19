import Header from './header'
import Footer from './footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                {children} <Outlet />{' '}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
