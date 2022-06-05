import styled from "styled-components";

const Input = ({ name, setName }) => {
  return (
    <Wrapper>
      <Label>Which wizard/witch are you ?</Label>
      <NameInput
        type="text"
        placeholder="Harry"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <NameButton type="submit">Log In !</NameButton>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  align-items: center;
`;

const Label = styled.label`
  text-align: center;
  font-size: 40px;
  margin-bottom: 50px;
`;

const NameInput = styled.input`
  text-align: center;
  font-size: 30px;
  width: 300px;
  margin: 0;
  padding: 0;
`;

const NameButton = styled.button`
  width: 300px;
  font-size: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
