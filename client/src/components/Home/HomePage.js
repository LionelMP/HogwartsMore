import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { useContext } from "react";
import styled from "styled-components";
import src from "../../asset/HogwartsBackground.jpg";

const HomePage = () => {
  console.log(src);
  const { currentUser } = useContext(CurrentUserContext);

  let today = new Date();
  const finalExamsDate = new Date(1980, 6, 31); // Harry Potter's birthdate
  console.log(today);
  console.log(finalExamsDate);

  // Countdown
  let borderClass = "";
  let monthsLeft = finalExamsDate.getMonth() - today.getMonth();
  console.log(monthsLeft);
  let daysLeft = finalExamsDate.getDate() - today.getDate();
  console.log(daysLeft);
  let countdown = "";

  if (monthsLeft > 1) {
    countdown = `${monthsLeft} months left to final exams.`;
    borderClass = "months";
    console.log(countdown);
  } else if (monthsLeft > 0) {
    countdown = `${monthsLeft} month left to final exams.`;
    borderClass = "months";
    console.log(countdown);
  } else if (monthsLeft === 0) {
    if (daysLeft > 7) {
      countdown = `${daysLeft} days left to final exams.`;
      borderClass = "days";
      console.log(countdown);
    } else if (daysLeft > 1) {
      countdown = `Final exams are next week!`;
      borderClass = "nextWeek";
      console.log(countdown);
    } else if (daysLeft > 0) {
        countdown = `Final exams start tomorrow!`;
        borderClass = "tomorrow";
        console.log(countdown);
    }
    else
    {
        countdown = `Final exams start today, good luck!`;
        borderClass = "goodLuck";
        console.log(countdown);
    }
  }
  else
  {
      if (monthsLeft === -1 && daysLeft > 25)
      {
        countdown = `Final exams are this week, good luck!`;
        borderClass = "goodLuck";
        console.log(countdown);
      }
      else
      {
        countdown = `${monthsLeft + 12} months left to final exams.`;
        borderClass = "months";
        console.log(countdown);
      }
  }

  return (
    <Wrapper>
      <div>HomePage</div>
      <div>Castle info</div>
      <div>famous wizard info</div>
      <Welcome>Welcome to HogwartsMore !</Welcome>
      {/* <InfoMessages></InfoMessages> */}
      <Countdown className={`${borderClass}`}>
        {countdown}
      </Countdown>
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
min-height: 94vh;
  background-image: url(${src});
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, 
  rgba(0, 0, 0, 0) 50%, 
  rgba(0, 0, 0, 1) 100%), 
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