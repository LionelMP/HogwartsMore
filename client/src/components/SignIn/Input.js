import styled from "styled-components";

const Input = ({ selectedEmail, setSelectedEmail }) => {
  return (
    <Wrapper>
      <Label>Which is your wizard/witch connection email ?</Label>
      <EmailInput
        type="email"
        placeholder="Harry@gmail.com"
        onChange={(ev) => setSelectedEmail(ev.target.value)}
      />
      <EmailButton type="submit">Log In !</EmailButton>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  align-items: center;
`;

const Label = styled.label`
  text-align: center;
  font-size: 40px;
  margin-bottom: 50px;
`;

const EmailInput = styled.input`
  text-align: center;
  font-size: 30px;
  width: 300px;
  margin: 0;
  padding: 0;
`;

const EmailButton = styled.button`
  width: 300px;
  font-size: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
