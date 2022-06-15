import styled from "styled-components";

const Input = ({ newPassword, setNewPassword, newConfirmation, setNewConfirmation }) => {
  return (
    <Wrapper>
      <PasswordInput
        type="password"
        placeholder="Password"
        onChange={(ev) => setNewPassword(ev.target.value)}
      />
        <PasswordInput
          type="password"
          placeholder="Confirmation"
          onChange={(ev) => setNewConfirmation(ev.target.value)}
        />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PasswordInput = styled.input`
  text-align: center;
  font-size: 20px;
  width: 200px;
  margin: 0;
  padding: 0;
`;