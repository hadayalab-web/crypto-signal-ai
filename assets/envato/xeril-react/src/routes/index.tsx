import { lazy } from 'react'
import { Navigate, type RouteProps } from 'react-router-dom'

//home
const Home1 = lazy(() => import('@/pages/home/index'))
const Home2 = lazy(() => import('@/pages/home2/index'))
const Home3 = lazy(() => import('@/pages/home3/index'))
const Home4 = lazy(() => import('@/pages/home4/index'))
const Home5 = lazy(() => import('@/pages/home5/index'))
const Home6 = lazy(() => import('@/pages/home6/index'))

//case

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

const initialRoutes: RoutesProps[] = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/home" />,
  },
]

const homePages: RoutesProps[] = [
  {
    path: '/home',
    name: 'Home 01',
    element: <Home1 />,
  },
  {
    path: '/home2',
    name: 'Home 02',
    element: <Home2 />,
  },
  {
    path: '/home3',
    name: 'Home 03',
    element: <Home3 />,
  },
  {
    path: '/home4',
    name: 'Home 04',
    element: <Home4 />,
  },
  {
    path: '/home5',
    name: 'Home 05',
    element: <Home5 />,
  },
  {
    path: '/home6',
    name: 'Home 06',
    element: <Home6 />,
  },
]

export const appRoutes = [...initialRoutes, ...homePages]
