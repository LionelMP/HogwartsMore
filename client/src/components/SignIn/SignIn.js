import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import Input from "./Input";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";

const SignIn = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
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
      body: JSON.stringify({ email: selectedEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data !== "Not found.") {
        setCurrentUser(data.data);
          navigate(`/`);
        } else {
          alert(
            `🤷‍♂️ Sorry we didn't find this email: "${selectedEmail}" in the whole castle 🏰.`
          );
        }
      })
  };

  return (
    <Wrapper>
      <div>SignIn</div>
      <form onSubmit={handleSubmit}>
        <Input selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail} />
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
