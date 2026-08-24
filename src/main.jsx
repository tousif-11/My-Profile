
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)


