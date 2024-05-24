import React from 'react'
import {
  RouterProvider
} from "react-router-dom";
import './App.css'
import { router } from './router/AppRoutes'

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
