import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import Input from "./Input";
import Password from "./Password";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";

const SignIn = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPassword, setSelectedPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: selectedEmail, password: selectedPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
        setCurrentUser(data.data);
          navigate(`/`);
        } else {
          alert(
            `🤷‍♂️ Sorry we cound't connect you.`
          );
        }
      })
  };

  return (
    <Wrapper>
      <div>SignIn</div>
      <form onSubmit={handleSubmit}>
        <Input selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail} />
        <Password selectedPassword={selectedPassword} setSelectedPassword={setSelectedPassword} />
      </form>
      <NewUserDiv>
        New in the castle? Click <NewUser to="/register">here!</NewUser>
      </NewUserDiv>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
`;

const NewUserDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const NewUser = styled(Link)``;
