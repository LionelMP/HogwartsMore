import { useState, useEffect } from "react";

const usePersistedState = (defaultValue, name) => {
    
    const [state, setState] = useState(() => {

        const storedValue = window.sessionStorage.getItem(name);

        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    });

    useEffect(() => {
        window.sessionStorage.setItem(name, JSON.stringify(state));
    }, [state])
    return [state, setState];
};

export default usePersistedState;