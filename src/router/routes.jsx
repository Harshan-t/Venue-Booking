import Login from '../pages/login.jsx'
import Register from '../pages/register.jsx'

import Landingpage from '../pages/Landingpage.jsx'
import Venue from '../pages/Venue.jsx'

import BookVenue from '../pages/BookVenue.jsx'
import Conformation from '../pages/BookConformation.jsx'

import UserDashboard from '../pages/UserDashboard.jsx'
import UserBookings from '../pages/UserBookings.jsx'
import UserQueries from '../pages/UserQueries.jsx'
import UserSettings from '../pages/UserSettings.jsx'

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
    path: '/user',
    children: [
      {
        path: 'dashboard',
        element: <UserDashboard  />,
      },
      {
        path: 'bookings',
        element: <UserBookings  />,
      },
      {
        path: 'help',
        element: <UserQueries  />,
      },
      {
        path: 'settings',
        element: <UserSettings  />,
      }
    ]
  },
  {
    path: '/book',
    element: <BookVenue />
  },
  {
    path: '/conformation',
    element: <Conformation />
  },
]

export default routes;