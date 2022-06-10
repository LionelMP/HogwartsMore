import styled from "styled-components";
import src from "../../asset/SlytherinCommonRoom.jpg";

const Slytherin = () => {
  return (
    <Wrapper>
      <SlytherinCommonRoom src={src} alt="Slytherin common room image" />
    </Wrapper>
  );
};

export default Slytherin;

const SlytherinCommonRoom = styled.img`
  height: 94vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
