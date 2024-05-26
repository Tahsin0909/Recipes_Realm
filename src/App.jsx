import React from 'react'
import {
  RouterProvider
} from "react-router-dom";
import './App.css'
import { router } from './router/AppRoutes'
import { ContextApi } from './Context/ContextApi';

function App() {

  return (
    <React.StrictMode>
      <ContextApi>
        <RouterProvider router={router} />
      </ContextApi>
    </React.StrictMode>
  )
}

export default App
