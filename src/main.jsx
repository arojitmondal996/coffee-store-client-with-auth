import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import Signin from './components/Signin.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Users from './components/Users.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://coffee-store-server-sepia-iota.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffee-store-server-sepia-iota.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/users',
    element: <Users/>,
    loader: () => fetch('https://coffee-store-server-sepia-iota.vercel.app/users')
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
