import React from 'react'
import {
  RouterProvider
} from "react-router-dom";
import './App.css'
import { router } from './router/AppRoutes'
import { ContextApi } from './Context/ContextApi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  return (
    <React.StrictMode>
      <QueryClientProvider client={QueryClient}>
        <ContextApi>
          <RouterProvider router={router} />
        </ContextApi>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App
