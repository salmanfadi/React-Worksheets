import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './lib/router'
import TaskProvider from './providers/taskContextProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <RouterProvider router={router}></RouterProvider>
    </TaskProvider>
  </StrictMode>,
)
