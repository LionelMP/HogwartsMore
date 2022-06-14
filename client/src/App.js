import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./components/Home/HomePage";
import NavLink from "./components/NavLink";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import { CurrentUserContext } from "./components/CurrentUser/CurrentUserContext";
import CommonRoom from "./components/CommonRoom/CommonRoom";
import CommonRoomError from "./components/CommonRoom/CommonRoomError";
import WizardDetails from "./components/FamousWizards/WizardDetails";
import List from "./components/FamousWizards/List";

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
          <Route 
          exact 
          path="/common-room" 
          element={currentUser ?  <CommonRoom /> : <CommonRoomError />}
          />
          <Route 
          exact 
          path="/famous-wizard" 
          element={<List />}
          />
          <Route 
          exact 
          path="/famous-wizard/:name" 
          element={<WizardDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
