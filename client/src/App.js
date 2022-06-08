import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./components/Home/HomePage";
import NavLink from "./components/NavLink";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import { CurrentUserContext } from "./components/CurrentUser/CurrentUserContext";
import Gryffindor from "./components/CommonRoom/Gryffindor";
import Slytherin from "./components/CommonRoom/Slytherin";
import Hufflepuff from "./components/CommonRoom/Hufflepuff";
import Ravenclaw from "./components/CommonRoom/Ravenclaw";
import CommonRoomError from "./components/CommonRoom/CommonRoomError";

import "./App.css";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavLink />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/signin"
            element={currentUser ? <Navigate to="/" exact /> : <SignIn />}
          />
          <Route
            exact
            path="/register"
            element={currentUser ? <Navigate to="/" exact /> : <Register />}
          />
          {/* <Route 
          exact 
          path="/common-room/Gryffindor" 
          element={currentUser.house === "Gryffindor" ? <Gryffindor /> : <CommonRoomError />}
          />
          <Route 
          exact 
          path="/common-room/Slytherin" 
          element={currentUser.house === "Slytherin" ? <Slytherin /> : <CommonRoomError />}
          />
          <Route 
          exact 
          path="/common-room/Hufflepuff" 
          element={currentUser.house === "Hufflepuff" ? <Hufflepuff /> : <CommonRoomError />}
          />
          <Route 
          exact 
          path="/common-room/Ravenclaw" 
          element={currentUser.house === "Ravenclaw" ? <Ravenclaw /> : <CommonRoomError />}
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
