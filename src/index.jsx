import React from 'react'
import { createRoot } from 'react-dom/client'
import Route from './route/route'


const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Route />
    </React.StrictMode>
)
