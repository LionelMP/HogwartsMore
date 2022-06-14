import { createContext, useState } from "react";
import usePersistedState from "./UsePersistedState";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    // Current user will be null is log out or full object if logged in
    const [currentUser, setCurrentUser] = usePersistedState(null, "currentUser");
    const [users, setUsers] = useState([]);
  
    return (
        <CurrentUserContext.Provider
        value={{ setCurrentUser, currentUser, users }}>
            {children}
        </CurrentUserContext.Provider>
    );
};