const countdownFunc = () => {
  let today = new Date();
  const finalExamsDate = new Date(1980, 6, 31); // Harry Potter's birthdate

  // Countdown
  let borderClass = "";
  let monthsLeft = finalExamsDate.getMonth() - today.getMonth();
  let daysLeft = finalExamsDate.getDate() - today.getDate();
  let countdown = "";

  if (monthsLeft > 1) {
    countdown = `${monthsLeft} months left to final exams.`;
    borderClass = "months";
  } else if (monthsLeft > 0) {
    countdown = `${monthsLeft} month left to final exams.`;
    borderClass = "months";
  } else if (monthsLeft === 0) {
    if (daysLeft > 7) {
      countdown = `${daysLeft} days left to final exams.`;
      borderClass = "days";
    } else if (daysLeft > 1) {
      countdown = `Final exams are next week!`;
      borderClass = "nextWeek";
    } else if (daysLeft > 0) {
      countdown = `Final exams start tomorrow!`;
      borderClass = "tomorrow";
    } else {
      countdown = `Final exams start today, good luck!`;
      borderClass = "goodLuck";
    }
  } else {
    if (monthsLeft === -1 && daysLeft > 25) {
      countdown = `Final exams are this week, good luck!`;
      borderClass = "goodLuck";
    } else {
      countdown = `${monthsLeft + 12} months left to final exams.`;
      borderClass = "months";
    }
  }

  return {countdown, borderClass};
};

export default countdownFunc;
