import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { Link } from "react-router-dom";

const PotionClass = () => {
  
  const { currentUser } = useContext(CurrentUserContext);
  const [SelectedAnswerTo1, setSelectedAnswerTo1] = useState(null);
  const [SelectedAnswerTo2, setSelectedAnswerTo2] = useState(null);
  const [SelectedAnswerTo3, setSelectedAnswerTo3] = useState(null);
  const [submitTest, setSubmitTest] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Counting points
    // Question 1
    if (SelectedAnswerTo1 === "A potion to cure boils") {
      score++;
    }
    // Question 2
    if (SelectedAnswerTo2 === "Acid green") {
      score++;
    }
    // Question 3
    if (SelectedAnswerTo3 === "Draught of Living Death") {
      score++;
    }

    fetch(`/api/add-mark`, {
      method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ course: "potion", email: currentUser.email, mark: score })
    })
    .then((res) => res.json())
    .then((data) => {
      setSubmitTest(data.data.mark);
    })
  };
  let score = 0;

  const question1 = [
    "Polyjuice Potion",
    "A potion to cure boils",
    "Confusing Concoction",
    "An antidote to common poisions",
  ];
  const question2 = [
    "Midnight blue",
    "Bright orange",
    "Acid green",
    "Glimmering gold",
  ];
  const question3 = [
    "Draught of Peace",
    "Draught of Living Death",
    "Pepperup Potion",
    "Wolfsbane Potion",
  ];

  return (
    <Wrapper>
      {!submitTest 
      ?<Form onSubmit={handleSubmit}>
        <Title>Potion class test</Title>
        <Question>
          In Harry’s first lesson with Snape, what is the first potion the class
          learn to make?
        </Question>
        <Answers>
          {question1.map((answer1, index) => {
            return (
              <div key={`answerTo1: ${answer1}, ${index}`}>
                <input
                  required={true}
                  type="radio"
                  id={answer1}
                  name="answerTo1"
                  value={answer1}
                  onChange={(e) => {
                    setSelectedAnswerTo1(e.target.value);
                  }}
                ></input>
                <label htmlFor={answer1}>{answer1}</label>
              </div>
            );
          })}
        </Answers>
        <Question>What colour is a Shrinking Solution supposed to be?</Question>
        <Answers>
          {question2.map((answer2, index) => {
            return (
              <div key={`answerTo2: ${answer2}, ${index}`}>
                <input
                  required={true}
                  type="radio"
                  id={answer2}
                  name="answerTo2"
                  value={answer2}
                  onChange={(e) => {
                    setSelectedAnswerTo2(e.target.value);
                  }}
                ></input>
                <label htmlFor={answer2}>{answer2}</label>
              </div>
            );
          })}
        </Answers>
        <Question>
          What would you get if you added powdered root of asphodel to an
          infusion of wormwood?
        </Question>
        <Answers>
          {question3.map((answer3, index) => {
            return (
              <div key={`answerTo3: ${answer3}, ${index}`}>
                <input
                  required={true}
                  type="radio"
                  id={answer3}
                  name="answerTo3"
                  value={answer3}
                  onChange={(e) => {
                    setSelectedAnswerTo3(e.target.value);
                  }}
                ></input>
                <label htmlFor={answer3}>{answer3}</label>
              </div>
            );
          })}
        </Answers>
        <Button id="submitButton" type="submit">
          Confirm
          </Button>
      </Form>
      : <MarkWrapper>
        <YourMark>You hit: {score}/3</YourMark>
        <Buttons>
          <HomeLink to="/">Home</HomeLink>
          <CommonRoomLink to="/common-room">Common Room</CommonRoomLink>
        </Buttons>        
          </MarkWrapper>
      }
      
    </Wrapper>
  );
};

export default PotionClass;

const CommonRoomLink = styled(Link)`
text-shadow: 1px 1px white;
font-size: 40px;
text-decoration: none;
color: black;
`;

const HomeLink = styled(Link)`
text-shadow: 1px 1px white;
font-size: 40px;
text-decoration: none;
color: black;
`;

const Buttons = styled.div`
width: 600px;
display: flex;
justify-content: space-between;
`;

const MarkWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`;

const YourMark = styled.div`
font-size: 40px;
margin-bottom: 400px;
`;

const Button = styled.button`
  font-size: 25px;
  margin: 20px 40px 0;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;

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

const Title = styled.div``;

const Question = styled.div``;

const Answers = styled.div``;

//Questions

// In Harry’s first lesson with Snape, what is the first potion the class learn to make?

// Polyjuice Potion
// A potion to cure boils ---
// Confusing Concoction
// An antidote to common poisions

// What colour is a Shrinking Solution supposed to be?
// Midnight blue
// Bright orange
// Acid green ---
// Glimmering gold

// What would you get if you added powdered root of asphodel to an infusion of wormwood?
// Draught of Peace
// Draught of Living Death ---
// Pepperup Potion
// Wolfsbane Potion
