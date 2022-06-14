import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUser/CurrentUserContext";
import { useContext } from "react";
import srcGryffindorAnimal from "../asset/GryffindorAnimal.jpeg";
import srcHufflepuffAnimal from "../asset/HufflepuffAnimal.jpeg";
import srcRavenclawAnimal from "../asset/RavenclawAnimal.jpeg";
import srcSlytherinAnimal from "../asset/SlytherinAnimal.jpeg";
import { FaBroom } from "react-icons/fa";

const NavLink = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleClick = (ev) => {
    ev.preventDefault();

    setCurrentUser(null);
    navigate(`/`);
  };

  // Make conditional rendering if user logged in or not
  return (
    <Wrapper className={currentUser ? `${currentUser.house}` : ""}>
      <Title to="/">⚡HogwartsMore</Title>
      <Motto>Draco Dormiens Nunquam Titillandus</Motto>
      {!currentUser ? (
        <SignInButton to="/signin">Sign in</SignInButton>
      ) : (
        <LoggedIn>
          <GreetingsButton to={`/common-room`}>
            Hello {currentUser.name} !
          </GreetingsButton>
          <LogOut onClick={handleClick}>
            <FaBroom />LogOut
          </LogOut>
        </LoggedIn>
        
      )}
    </Wrapper>
  );
};

export default NavLink;

const LogOut = styled.div`
:hover{
  cursor: pointer;
}
background-color: white;
border-radius: 5px;
padding: 2px;
`;

const LoggedIn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-end;
margin-right: 10px;
`;

const SignInButton = styled(Link)`
  color: white;
  text-shadow: 1px 1px black;
  text-decoration: none;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const GreetingsButton = styled(Link)`
  color: white;
  text-shadow: 1px 1px black;
  text-decoration: none;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;
  height: 8vh;
  &.Gryffindor {
    background-image: url(${srcGryffindorAnimal});
  }
  &.Ravenclaw {
    background-image: url(${srcRavenclawAnimal});
  }
  &.Hufflepuff {
    background-image: url(${srcHufflepuffAnimal});
  }
  &.Slytherin {
    background-image: url(${srcSlytherinAnimal});
  }
`;

const Title = styled(Link)`
  text-decoration: none;
  color: white;
  text-shadow: 1px 1px black;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const Motto = styled.div`
  color: white;
  text-shadow: 1px 1px black;
  font-style: italic;
  font-size: 20px;
  display: flex;
  align-items: center;
`;
