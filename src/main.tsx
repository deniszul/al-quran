import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import Home from './pages/home'
import NotFound from './pages/notFound.tsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: '/surah/:surahName',
        element: <div></div>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
