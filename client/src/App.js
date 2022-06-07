import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./components/Home/HomePage";
import NavLink from "./components/NavLink";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import { CurrentUserContext } from "./components/CurrentUser/CurrentUserContext";



import './App.css';
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
          <Route exact path="/signin" element={currentUser ? <Navigate to="/" exact /> : <SignIn />} />
           <Route exact path="/register" element={<Register />} />
            {/* {currentUser ? <Redirect to="/" exact /> : <Signin />} */}
          {/* </Route> */}
          {/* <Route exact path="/profile/:profileId"> */}
            {/* <Profile /> */}
          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
