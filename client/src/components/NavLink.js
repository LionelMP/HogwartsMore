import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = () => {
  // Make conditional rendering if user logged in or not
  return (
    <Wrapper>
      <Title to="/">⚡HogwartsMore</Title>
      <Motto>Draco Dormiens Nunquam Titillandus</Motto>
      <SignInButton to="/signin">Sign in</SignInButton>
      {/* {!currentUser ? (
        <SignInButton to="/signin">Sign in</SignInButton>
      ) : (
        <GreetingsButton to={`/profile/${currentUser.id}`}>
          Hello {currentUser.name} !
        </GreetingsButton>
      )} */}
    </Wrapper>
  );
};

export default NavLink;

const SignInButton = styled(Link)`
color: black;
text-decoration: none;
`;

const GreetingsButton = styled(Link)`
color: black;
text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;
`;

const Title = styled(Link)`
text-decoration: none;
color: black;
`;

const Motto = styled.div``;
