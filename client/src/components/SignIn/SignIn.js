import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import Input from "./Input";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";


const SignIn = () => {
    const [name, setName] =useState("");
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    let navigate = useNavigate();

    const handleSubmit =(ev) => {
        ev.preventDefault();
    };

    return (
        <Wrapper>
            <div>SignIn</div>
            <form onSubmit={handleSubmit}>
                <Input name={name} setName={setName} />
            </form>
            <NewUserDiv>New in the castle? Click <NewUser to="/register">here!</NewUser></NewUserDiv>
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

const NewUser = styled(Link)`
`;