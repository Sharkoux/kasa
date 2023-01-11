import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/layout'
import Apropos from '../pages/Apropos'
import Erreur from '../pages/Erreur'
import Logement from '../pages/Logement'

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


function Route() {

   return (
        <RouterProvider router={router} />
   )
}

export default Route
