import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./components/Home/HomePage";
import NavLink from "./components/NavLink";



import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavLink />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/page-1">
            Page 1
          </Route>
          <Route exact path="/signin">
            {currentUser ? <Redirect to="/" exact /> : <Signin />}
          </Route>
          <Route exact path="/profile/:profileId">
            <Profile />
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
