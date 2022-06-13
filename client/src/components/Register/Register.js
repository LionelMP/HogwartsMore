import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";

const Register = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [selectedSpell, setSelectedSpell] = useState("");
  const [selectedWeakness, setSelectedWeakness] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  let house = "";

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  let navigate = useNavigate();

  const handleSubmit = (ev) => {
    let houses = { Gryffindor: 0, Ravenclaw: 0, Slytherin: 0, Hufflepuff: 0 };

    ev.preventDefault();

    // Sorting test, logic should change if new questions added
    // Adding points
    // Question 1
    if (selectedSpell === "expelliarmus") {
      houses.Gryffindor++;
    } else if (selectedSpell === "protego") {
      houses.Hufflepuff++;
    } else if (selectedSpell === "stupefy") {
      houses.Ravenclaw++;
    } else if (selectedSpell === "crucio") {
      houses.Slytherin++;
    }

    // Question 2
    if (selectedWeakness === "weak") {
      houses.Gryffindor++;
    } else if (selectedWeakness === "unkind") {
      houses.Hufflepuff++;
    } else if (selectedWeakness === "ignorant") {
      houses.Ravenclaw++;
    } else if (selectedWeakness === "boring") {
      houses.Slytherin++;
    }

    // Question 3
    if (selectedSkill === "keep secrets") {
      houses.Gryffindor++;
    } else if (selectedSkill === "make new friends") {
      houses.Hufflepuff++;
    } else if (selectedSkill === "absorb new information") {
      houses.Ravenclaw++;
    } else if (selectedSkill === "get what I want") {
      houses.Slytherin++;
    }

    // Sorting
    house = Object.keys(houses).find((key) => houses[key] === 3);

    if (house === undefined) {
      house = Object.keys(houses).find((key) => houses[key] === 2);

      // If draw
      if (house === undefined) {
        const drawHouses = Object.keys(houses).filter(
          (key) => houses[key] === 1
        );
        const randomIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        house = drawHouses[randomIndex];
      }
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
        email: newEmail.toLocaleLowerCase(),
        house: house,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
          setCurrentUser(data.data);
          console.log("this is data", data);
          console.log("this is data.data", data.data);
          if (data.data) {
            navigate(`/`);
          }
        } else {
          alert(`🤷‍♂️ Sorry something want wrong with your reservation.`);
        }
      });
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
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </div>
        <div className="centeredInput">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            size="30"
            required
            onChange={(e) => {
              setNewEmail(e.target.value);
            }}
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
                  onChange={(e) => {
                    setSelectedSpell(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setSelectedWeakness(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setSelectedSkill(e.target.value);
                  }}
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

const Form = styled.form`
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
