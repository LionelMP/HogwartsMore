import styled from "styled-components";

const Input = ({ selectedPassword, setSelectedPassword }) => {
  return (
    <Wrapper>
      <PasswordInput
        type="password"
        placeholder="Password"
        onChange={(ev) => setSelectedPassword(ev.target.value)}
      />
      <SinginButton type="submit">Log In !</SinginButton>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PasswordInput = styled.input`
  text-align: center;
  font-size: 30px;
  width: 300px;
  margin: 0;
  padding: 0;
`;

const SinginButton = styled.button`
  width: 300px;
  font-size: 30px;
  margin-top: 10px;
  padding: 0;
  cursor: pointer;
`;
