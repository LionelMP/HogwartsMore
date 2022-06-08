import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";


const Register = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  let house = {gryffindor: 0, ravenclaw: 0, slytherin: 0, hufflepuff: 0}
  let navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Sorting test
    if (spell === "expelliarmus")
    {
      house.gryffindor++;
    }

    // Creating new user
    fetch(`/api/add-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: newName,
        email: newEmail
      })
    })
    .then((res) => res.json())
    .then((data) => {
      setCurrentUser(data.data);
      console.log(data.data);
      if (data.data)
      {
        navigate.push(`/`);
      }
      else 
      {
        alert(
          `🤷‍♂️ Sorry something want wrong with your reservation.`
        );
      }
    })
  };

  const spells = ["expelliarmus", "protego", "stupefy", "crucio"];
  const weaknesses = ["weak", "ignorant", "unkind", "boring"];
  const skills = [
    "absorb new information",
    "make new friends",
    "get what I want",
    "keep secrets",
  ];

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <div className="centeredInput">
          <label htmlFor="name">Name:</label>
          <input 
          id="name" 
          type="text" 
          size="30" 
          autoFocus 
          required 
          onChange={(e) => {setNewName(e.target.value)}}
          />
        </div>
        <div className="centeredInput">
          <label htmlFor="email">Email:</label>
          <input 
          id="email" 
          type="email" 
          size="30" 
          required 
          onChange={(e) => {setNewEmail(e.target.value)}}
          />
        </div>
        <Question>
          You're locked in a duel with a skilled opponent. They fire an unknown
          spell at you, and you shout…
        </Question>
        <Answers>
          {spells.map((spellName, index) => {
            return (
              <div key={`spell: ${spellName}, ${index}`}>
                <input
                  required={true}
                  type="radio"
                  id={spellName}
                  name="spell"
                  value={spellName}
                ></input>
                <label htmlFor={spellName}>
                  {spellName.charAt(0).toUpperCase() + spellName.slice(1)}!
                </label>
              </div>
            );
          })}
        </Answers>
        <Question>You would be most hurt if a person called you...</Question>
        <Answers>
          {weaknesses.map((weaknessName, index) => {
            return (
              <div key={`weakness: ${weaknessName}, ${index}`}>
                <input
                  required={true}
                  type="radio"
                  id={weaknessName}
                  name="weakness"
                  value={weaknessName}
                ></input>
                <label htmlFor={weaknessName}>
                  {weaknessName.charAt(0).toUpperCase() + weaknessName.slice(1)}
                  .
                </label>
              </div>
            );
          })}
        </Answers>
        <Question>Which of your skills are you most proud of?</Question>
        <Answers>
          {skills.map((skillName, index) => {
            return (
              <div key={`skill: ${skillName}, ${index}`}>
                <input
                  required={true}
                  type="radio"
                  id={skillName}
                  name="skill"
                  value={skillName}
                ></input>
                <label htmlFor={skillName}>My ability to {skillName}.</label>
              </div>
            );
          })}
        </Answers>
        <Button id="submitButton" type="submit">
          Confirm
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Register;

const Button = styled.button`
  font-size: 25px;
  margin: 20px 40px 0;
`;

const Answers = styled.div``;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px 0 0 0;
  max-width: 475px;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const Question = styled.div`
  font-weight: 600;
  margin: 30px 0 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
