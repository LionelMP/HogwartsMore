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
import srcMiniMap from "../../asset/ParchmentMaraudersMap.png";

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
          <AnnouncementMessages>
            The third-floor corridor on the right-hand side is out of bounds to
            everyone who does not wish to die a very painful death.
          </AnnouncementMessages>
          <AnnouncementMessages>
            Students who witnessed the incident during Charms class on Friday
            the 13th are asked to report to the infirmary for injury control.
          </AnnouncementMessages>
        </Announcements>
      </AnnouncementsBox>
      <Welcome>Welcome {currentUser.name} to HogwartsMore !</Welcome>
      <HomePageInfo>
        <LeftHandSideWrapper>
          <Countdown className={`${borderClass}`}>{countdown}</Countdown>
          <MapWrapper to="/map">
            <MapText>Are you lost in the castle ?</MapText>
            <MiniMap src={srcMiniMap} />
          </MapWrapper>
        </LeftHandSideWrapper>
        {status === "loading" && <CircularProgress />}
        {status === "error" && <CommonRoomError />}
        {status === "idle" && (
          <RightHandSideWrapper>
            <RandomWizard to={`/famous-wizard/${randomWizard.name}`}>
              <Image src={srcChocoFrogCard} />
              <RandomWizardText>
                Discover a famous new wizard !
              </RandomWizardText>
            </RandomWizard>
            <FamousWizardList to="/famous-wizard">
              Or get the Chocolate Frog Cards list
            </FamousWizardList>
          </RightHandSideWrapper>
        )}
      </HomePageInfo>
    </Wrapper>
  );
};

export default HomePage;

const AnnouncementMessages = styled.span`
  margin-right: 100px;
`;

const MapWrapper = styled(Link)`
  margin-top: 50px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapText = styled.div`
  margin-bottom: 20px;
  color: black;
  font-size: 25px;
`;

const MiniMap = styled.img`
  height: 300px;
`;

const LeftHandSideWrapper = styled.div`
margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FamousWizardList = styled(Link)`
  margin-top: 40px;
  font-size: 30px;
  padding: 10px;
  color: rgb(190, 154, 99, 1);
  background-color: rgb(52, 0, 52, 1);
  text-decoration: none;
  text-align: center;
  width: 50%;
  border-radius: 50px;
`;

const RightHandSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RandomWizardText = styled.div`
margin-top: 5px;
padding: 10px;
border-radius: 50px;
width: 50%;
text-align: center;
  font-size: 30px;
  color: rgb(190, 154, 99, 1);
  background-color: rgb(52, 0, 52, 1);
`;

const HomePageInfo = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 150px;
  width: fit-content;
`;

const RandomWizard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: 5px solid #f0f0ff;
  overflow: hidden;
  box-shadow: 0 0.25em 0.5em #ccc, inset 0 0 1em 0.25em #ccc;

  :first-child {
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes defilement-rtl {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-100%, 0, 0);
      }
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
  overflow: hidden;
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
  text-align: center;
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
