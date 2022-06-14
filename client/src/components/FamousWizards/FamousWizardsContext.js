import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FamousWizardsContext = createContext(null);

export const FamousWizardsProvider = ({ children }) => {
    const [famousWizards, setFamousWizards] = useState([]);
    const [status, setStatus] = useState("loading");
        
    useEffect(() => {
        axios.get(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => {;
            setFamousWizards(response.data);
            setStatus("idle");
          })
          .catch(error => {
            console.log(error)});
            setStatus("eror");
    }, []);
  
    return (
        <FamousWizardsContext.Provider
        value={{ famousWizards, status }}>
            {children}
        </FamousWizardsContext.Provider>
    );
};