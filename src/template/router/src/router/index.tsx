import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/pages/error'

const WorkSpace = lazy(() => import('@/pages/workspace'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <WorkSpace />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
])

export default router
