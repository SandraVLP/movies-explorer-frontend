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
import * as auth from "../../utils/auth";
import api from "../../utils/MainApi";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function App() {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  

  function closeAllPopups() {
    setNavigationPopupOpen(false);
  }

  function signOut() {
    localStorage.removeItem("jwt");
    api.removeToken();
    setLoggedIn(false);
    window.location.replace("/");
  }

  const handleTokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");

      // проверяем токен пользователя
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            api.setToken(jwt);
            setEmail(res.data.email);
            setLoggedIn(true);
            // window.location.redirect("/movies");
          }
        })
        .catch((err) => {
          console.log(`Ошибка; ${err}`);
        })
        .finally(() => {
          setIsLoaded(true)
        })
    }
    else {
      setIsLoaded(true);
    }
  };

  function handleErrorMessages(err) {
    if (err === 400) {
      setErrorMessage("некорректно заполнено одно из полей ");
    }
    if (err === 401) {
      setErrorMessage("Пользователь с email не найден ");
    }
  }

  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          handleTokenCheck();
          window.location.replace("/movies");
        }
      })
      .catch((err) => {
        handleErrorMessages(err);
      });
  };

  function handleRegister(password, email, name) {
    auth
      .register(password, email, name)
      .then((res) => {
        if (res) {

          setErrorMessage(null);
          window.location.replace("/");
        }
      })
      .catch((err) => {
        handleErrorMessages(err);
      });
  }

  function handleUpdateUser(data) {
    api
      .setProfileData(data)
      .then((profile) => {
        setCurrentUser(profile.data);
        setSuccessText("Успешное редактирование профиля");
      })
      .catch((err) => {
        console.log(`Ошибка; ${err}`);
      });
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, []);
  

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getProfileData()])
        .then(([profile]) => {
          setCurrentUser(profile.data);
        })
        .catch((err) => {
          console.log(`Ошибка; ${err}`);
        });
    }
  }, [loggedIn]);

  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <>
          <Header openNavigation={() => setNavigationPopupOpen(true)} />
          <Outlet />
          <Footer />{" "}
          <NavigationPopup
            isOpen={isNavigationPopupOpen}
            onClose={closeAllPopups}
          />
        </>
      ),
      children: [
        { index: true, element: <Main /> },
        {
          path: "movies",
          element: <ProtectedRoute isLoaded={isLoaded} hasAccess={loggedIn}> <Movies /></ProtectedRoute>,
        },
        {
          path: "profile",
          element: <ProtectedRoute isLoaded={isLoaded}  hasAccess={loggedIn}> <Profile signOut={signOut} onUpdateUser={handleUpdateUser} successText={successText} /> </ProtectedRoute>,
        },
        {
          path: "signup",
          element: <Register onRegister={handleRegister} />,
        },
        {
          path: "signin",
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: "saved-movies",
          element: <ProtectedRoute isLoaded={isLoaded}  hasAccess={loggedIn}> <SavedMovies /> </ProtectedRoute>,
        },
        {
          path: "404",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
       <CurrentUserContext.Provider value={currentUser}>
      <RouterProvider router={router} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
