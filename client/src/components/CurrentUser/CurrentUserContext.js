import { createContext, useEffect, useState } from "react";
import usePersistedState from "./UsePersistedState";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    // Current user will be null is log out or full object if logged in
    const [currentUser, setCurrentUser] = usePersistedState(null, "currentUser");
    const [users, setUsers] = useState([]);
    
  useEffect(() => {
    // fetch(`/api/user`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data.data);
    //   });
  }, []);

    return (
        <CurrentUserContext.Provider
        value={{ setCurrentUser, currentUser, users }}>
            {children}
        </CurrentUserContext.Provider>
    );
};