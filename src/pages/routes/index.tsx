import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../home'
import Layout from '../layout'

const Routes = () => {
   const element = useRoutes([
      {
         path: '/',
         element: <Layout />,
         children: [
            {
               path: '/',
               element: <Navigate to='/home' />,
            },
            {
               path: '/home',
               element: <Home />,
            }
         ]
      }
   ])
   return element
}

export default Routes