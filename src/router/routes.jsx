import Login from '../pages/login.jsx'
import Register from '../pages/register.jsx'
import Landingpage from '../pages/Landingpage.jsx'
import Venue from '../pages/Venue.jsx'
import BookVenue from '../pages/BookVenue.jsx'
import Summary from '../pages/BookSummary.jsx'
import Conformation from '../pages/BookConformation.jsx'

const routes = [
  {
    path: '/',
    element: <Landingpage />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Landingpage />
  },
  {
    path: '/venue',
    element: <Venue  />
  },
  {
    path: '/book',
    element: <BookVenue  />
  },
  {
    path: '/summary',
    element: <Summary />
  },
  {
    path: '/conformation',
    element: <Conformation />
  },
]

export default routes;