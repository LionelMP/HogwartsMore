import styled from "styled-components";

const Register = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <div class="centeredInput">
          <label for="name">Name:</label>
          <input
            id="name"
            type="text"
            size="30"
            autofocus
            required
          />
          </div>
        <Question>You're locked in a duel with a skilled opponent. They fire an unknown spell at you, and you shout…</Question>
        <div className="centeredInput">           
          <input
            type="radio"
            id="expelliarmus"
            name="spell"
            value="expelliarmus"
          ></input>
          <label for="spell">Expelliarmus!</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="protego"
            name="spell"
            value="protego"
          ></input>
          <label for="spell">Protego!</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="stupefy"
            name="spell"
            value="stupefy"
          ></input>
          <label for="spell">Stupefy!</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="crucio"
            name="spell"
            value="crucio"
          ></input>
          <label for="spell">Cruxio!</label>
        </div>
        <Question>You would be most hurt if a person called you...</Question>
        <div className="centeredInput">           
          <input
            type="radio"
            id="weak"
            name="weakness"
            value="weak"
          ></input>
          <label for="weakness">Weak</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="ignorant"
            name="weakness"
            value="ignorant"
          ></input>
          <label for="weakness">Ignorant</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="unkind"
            name="weakness"
            value="unkind"
          ></input>
          <label for="weakness">Unkind</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="boring"
            name="weakness"
            value="boring"
          ></input>
          <label for="weakness">Boring</label>
        </div>
        <Question>Which of your skills are you most proud of?</Question>
        <div className="centeredInput">           
          <input
            type="radio"
            id="info"
            name="skill"
            value="info"
          ></input>
          <label for="skill">My ability to absorb new information.</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="friends"
            name="skill"
            value="friends"
          ></input>
          <label for="skill">My ability to make new friends.</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="want"
            name="skill"
            value="want"
          ></input>
          <label for="skill">My ability to get what I want.</label>
        </div>
        <div className="centeredInput">
          <input
            type="radio"
            id="secrets"
            name="skill"
            value="secrets"
          ></input>
          <label for="skill">My ability to keep secrets.</label>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Register;

const Form = styled.div`
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
    margin: 20px 0;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    /* text-align: center; */
`;