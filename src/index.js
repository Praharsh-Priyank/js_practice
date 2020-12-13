const average = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (dolphins, koyalas) => {
  if (koyalas > 2 * dolphins) {
    console.log("Koyalas are winner");
  } else if (dolphins > 2 * koyalas) {
    console.log("dolphins are winner");
  } else {
    console.log("No winner");
  }
};

checkWinner(average(44, 23, 71), average(65, 54, 49));
checkWinner(average(85, 54, 41), average(23, 34, 27));
