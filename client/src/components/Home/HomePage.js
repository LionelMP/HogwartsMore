import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { useContext } from "react";
import styled from "styled-components";
import src from "../../asset/HogwartsBackground.jpg";
import countdownFunc from "../../helpers/countdown";

const HomePage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const countdown = countdownFunc().countdown;
  const borderClass = countdownFunc().borderClass;

  return (
    <Wrapper>
      <div>HomePage</div>
      <div>Castle info</div>
      <div>famous wizard info</div>
      <Welcome>Welcome to HogwartsMore !</Welcome>
      {/* <InfoMessages></InfoMessages> */}
      <Countdown className={`${borderClass}`}>{countdown}</Countdown>
    </Wrapper>
  );
};

export default HomePage;

const Welcome = styled.div`
  /* font-family: "Bluu Next", sans-serif; */
  font-size: 60px;
  text-align: center;
`;

const Wrapper = styled.div`
  min-height: 92vh;
  background-image: url(${src});
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${src}) no-repeat;
`;

const Countdown = styled.div`
  width: 300px;
  &.months {
    border: 4px green dashed;
  }
  &.days {
    border: 4px yellow dashed;
  }
  &.nextWeek {
    border: 4px orange dashed;
  }
  &.tomorrow {
    border: 4px red dashed;
  }
  &.goodLuck {
    border: 4px cyan dashed;
  }
`;
