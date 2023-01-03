import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout'
import Apropos from './pages/Apropos'
import Erreur from './pages/Erreur'
import Logement from './pages/Logement'


/* create router (layout and all path children) */ 
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Apropos',
                element: <Apropos />,
            },
            {
                path: '/logement/:id',
                element: <Logement />,
                errorElement: <Erreur />,
            },
            {
                path: '*',
                element: <Erreur />,
            },
        ],
    },
])

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
