import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, Error, Register, Login, DashboardLayout, Landing, AddMark, Stats, AllMarks, Profile, Admin } from './pages'
import './index.css'

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}
checkDefaultTheme()

const router = createBrowserRouter([{
  path: '/',
  element: <HomeLayout />,
  errorElement: <Error />,
  children: [{
    index: true,
    element: <Landing />,
  }, {
    path: '/register',
    element: <Register />,
  }, {
    path: '/login',
    element: <Login />,
  }, {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [{
      index: true,
      element: <AddMark />,
    }, {
      path: 'stats', element: <Stats />,
    }, {
      path: 'all-marks', element: <AllMarks />,
    }, {
      path: 'profile', element: <Profile />,
    }, {
      path: 'admin', element: <Admin />,
    }]
  }]
}])

const App = () => {
  return <RouterProvider router={router} />
}

export default App