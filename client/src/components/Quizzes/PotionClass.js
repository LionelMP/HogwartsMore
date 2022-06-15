import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { useNavigate } from "react-router-dom";

const PotionClass = () => {
  
  const { currentUser } = useContext(CurrentUserContext);
  const [SelectedAnswerTo1, setSelectedAnswerTo1] = useState(null);
  const [SelectedAnswerTo2, setSelectedAnswerTo2] = useState(null);
  const [SelectedAnswerTo3, setSelectedAnswerTo3] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Counting points
    // Question 1
    if (question1 === "A potion to cure boils") {
      score++;
    }
    // Question 2
    if (question2 === "Acid green") {
      score++;
    }
    // Question 3
    if (question3 === "Draught of Living Death") {
      score++;
    }

    fetch(`/api/add-mark/potion`, {
      method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ course: "potion", name: currentUser.name })
    })
    .then((res) => res.json())
    .then(() => {
      navigate(`/`);
    })
  };
  const score = 0;

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
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </Wrapper>
  );
};

export default PotionClass;

const Wrapper = styled.div``;

const Form = styled.div``;

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
