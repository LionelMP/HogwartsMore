import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { FamousWizardsContext } from "../FamousWizards/FamousWizardsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import CommonRoomError from "../CommonRoom/CommonRoomError";
import src from "../../asset/HogwartsBackground.jpg";
import countdownFunc from "../../helpers/countdown";
import srcChocoFrogCard from "../../asset/ChocolateFrogCard.png";

const HomePage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { famousWizards, status } = useContext(FamousWizardsContext);

  // Countdown function relative
  const countdown = countdownFunc().countdown;
  const borderClass = countdownFunc().borderClass;

  // Randomising a famouswizard
  const randomIndex = Math.floor(Math.random() * (403 - 0) + 0); // With max=403 excluded and min=0 included
  // console.log(randomIndex);
  const randomWizard = famousWizards[randomIndex];
  // console.log(randomWizard);

  return (
    <Wrapper>
      <AnnouncementsBox>
        <Announcements>
          The third-floor corridor on the right-hand side is out of bounds to
          everyone who does not wish to die a very painful death. Students who
          witnessed the incident during Charms class on Friday the 13th are
          asked to report to the infirmary for injury control.
        </Announcements>
      </AnnouncementsBox>
      <Welcome>Welcome to HogwartsMore !</Welcome>
      <HomePageInfo>
        <Countdown className={`${borderClass}`}>{countdown}</Countdown>
        {status === "loading" && <CircularProgress />}
        {status === "error" && <CommonRoomError />}
        {status === "idle" && (
          <RandomWizard to={`/famous-wizard/${randomWizard.name}`}>
            <RandomWizardText>Discover a famous new wizard !</RandomWizardText>
            <Image src={srcChocoFrogCard} />
          </RandomWizard>
        )}
      </HomePageInfo>
    </Wrapper>
  );
};

export default HomePage;

const RandomWizardText = styled.div`
  font-size: 30px;
  color: black;
`;

const HomePageInfo = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img``;

const RandomWizard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const Announcements = styled.div`
  font-size: 20px;
  display: inline-block;
  padding-right: 2em;
  padding-left: 100%;
  white-space: nowrap;
  animation: defilement-rtl 45s infinite linear;
  animation-name: defilement-rtl;
`;

const AnnouncementsBox = styled.div`
  max-width: 100em;
  margin: 4em auto 2em;
  border: 5px solid #F0F0FF;
  overflow: hidden;
  box-shadow: 0 .25em .5em #CCC,inset 0 0 1em .25em #CCC;
  
:first-child {
  
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes defilement-rtl {
    0% {
      transform: translate3d(0,0,0);
    }
    100% {
      transform: translate3d(-100%,0,0);
    }
  }
`;

const Welcome = styled.div`
  /* font-family: "Bluu Next", sans-serif; */
  margin-top: 0;
  text-shadow: 1px 1px white;
  font-size: 70px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 30px;
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
