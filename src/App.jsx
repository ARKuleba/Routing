//import './App.css';
import Album, { loader as albumLoader, } from './routes/Album'
import Albums, { loader as albumsLoader, } from './routes/Albums'
import User, { loader as userLoader, } from './routes/User'
import Users, { loader as usersLoader,} from './routes/Users'
import Layout from './routes/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './routes/NotFound'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'/albums',
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: '/albums/:id',
        loader: albumLoader,
        element: <Album />,
      },
      {
        path: '/users',
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: '/users/:id',
        loader: userLoader,
        element: <User />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
