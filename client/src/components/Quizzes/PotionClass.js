import styled from "styled-components";

const PotionClass = () => {
    const Question1 = [
        "Polyjuice Potion",
        "A potion to cure boils",
        "Confusing Concoction",
        "An antidote to common poisions"
    ];
    const Question2 = [
        "Midnight blue",
        "Bright orange",
        "Acid green",
        "Glimmering gold"
    ];
    const Question3 = [
        "Draught of Peace",
        "Draught of Living Death",
        "Pepperup Potion",
        "Wolfsbane Potion"
    ];
    const Question4 = [
        "Leeches",
        "Shrivelfig",
        "Lacewing flies",
        "Fluxweed",
        "Knotgrass"
    ];
    const Question5 = [
        "Phyllida Spore",
        "Adalbert Waffling",
        "Emeric Switch",
        "Arsenius Jigger"
    ];
    const Question6 = [
        "True",
        "False"
    ];
    const Question7 = [
        "Amortentia",
        "Elixir of Life",
        "Baruffio's Brain Elixir",
        "Pepperup Potion"
    ];
    const Question8 = [
        "Advanced Potion Making",
        "Magical Drafts and Potions",
        "Weird Wizardind Dilemmas and Their Solutions",
        "Moste Potente Potions"
    ];
    const Question9 = [
        "Silver",
        "Green",
        "None, it's clear",
        "Frothy white"
    ];
    const Question10 = [
        "One is an insect the other a plant",
        "One is red the other orange",
        "None they are different names for the same plant",
        "One is big the other really small"
    ];

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Title>Potion class test</Title>
                <Question>
                In Harry’s first lesson with Snape, what is the first potion the class learn to make?
                </Question>
                <Answers>
                    {.map(())}
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

// What ingredients do you need to make a Polyjuice Potion? (MCQ)
// Leeches-
// Shrivelfig
// Lacewing flies-
// Fluxweed-
// Knotgrass-

// Who was the writer of Magical Drafts and Potions?
// Phyllida Spore
// Adalbert Waffling
// Emeric Switch
// Arsenius Jigger ---

// Muggles can make potions if they had the right ingredients. True or false?
// True
// False ---

// Which potion is distinctive because of its ‘mother-of-pearl sheen’?
// Amortentia ---
// Elixir of Life
// Baruffio's Brain Elixir
// Pepperup Potion

// In which potions book can we read to learn how to make Polyjuice Potion?
// Advanced Potion Making
// Magical Drafts and Potions
// Weird Wizardind Dilemmas and Their Solutions
// Moste Potente Potions ---

// What colour is Veritaserum?
// Silver
// Green
// None, it's clear ---
// Frothy white

// What is the difference between monkshood and wolfsbane?
// One is an insect the other a plant
// One is red the other orange
// None they are different names for the same plant
// One is big the other really small


