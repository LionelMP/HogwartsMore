import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { useContext } from "react";


const HomePage = () => {
    const { currentUser } = useContext(CurrentUserContext);

    return (
        <>
        <div>HomePage</div>
        <div>Castle info</div>
        <div>exam delai</div>
        <div>famous wizard info</div>
        <div>Welcome to HogwartsMore !</div>
        {/* <InfoMessages></InfoMessages> */}
        </>
    );
};

export default HomePage;