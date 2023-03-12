import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { Routes, Route,  createBrowserRouter,
  RouterProvider,
  Outlet, } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header/><Outlet/> <Footer/>
      </>,
      children: [
        { index: true, element: <Main /> },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/signup",
          element: <Register />,
        },
        {
          path: "/signin",
          element: <Login />,
        },
        {
          path: "/saved-movies",
          element: <SavedMovies />,
        },
        {
          path: "/404",
          element: <NotFound />,
        },
      ],
    },
  ]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
