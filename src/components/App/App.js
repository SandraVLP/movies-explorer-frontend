import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import NavigationPopup from "../NavigationPopup/NavigationPopup";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = useState(false);
  function closeAllPopups() {
    setNavigationPopupOpen(false);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header openNavigation={() => setNavigationPopupOpen(true)} />
          <Outlet /> <Footer />{" "}
          <NavigationPopup
            isOpen={isNavigationPopupOpen}
            onClose={closeAllPopups}
          />
        </>
      ),
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

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
