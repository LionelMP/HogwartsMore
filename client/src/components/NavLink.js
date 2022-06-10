import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUser/CurrentUserContext";
import { useContext } from "react";
import srcGryffindor from "../asset/GryffindorAnimal.jpeg";
import srcHufflepuff from "../asset/HufflepuffAnimal.jpeg";
import srcRavenclaw from "../asset/RavenclawAnimal.jpeg";
import srcSlytherin from "../asset/SlytherinAnimal.jpeg";

const NavLink = () => {

  const { currentUser } = useContext(CurrentUserContext);

  // Make conditional rendering if user logged in or not
  return (
    <Wrapper className={currentUser ? `${currentUser.house}` : ""}>
      <Title to="/">⚡HogwartsMore</Title>
      <Motto>Draco Dormiens Nunquam Titillandus</Motto>
      {!currentUser ? (
        <SignInButton to="/signin">Sign in</SignInButton>
      ) : (
        <GreetingsButton to={`/common-room/${currentUser.house}`}>
          Hello {currentUser.name} !
        </GreetingsButton>
      )}

    </Wrapper>
  );
};

export default NavLink;

const SignInButton = styled(Link)`
color: black;
text-decoration: none;
font-size: 30px;
display: flex;
align-items: center;
`;

const GreetingsButton = styled(Link)`
color: black;
text-decoration: none;
font-size: 30px;
display: flex;
align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;
  height: 6vh;
  &.Gryffindor {
    background-image: url(${srcGryffindor});
  }
  &.Ravenclaw {
    background-image: url(${srcRavenclaw});
  }
  &.Hufflepuff {
    background-image: url(${srcHufflepuff});
  }
  &.Slytherin {
    background-image: url(${srcSlytherin});
  }
`;

const Title = styled(Link)`
text-decoration: none;
color: black;
font-size: 30px;
display: flex;
align-items: center;
`;

const Motto = styled.div`
  font-style: italic;
  font-size: 20px;
display: flex;
align-items: center;
`;
