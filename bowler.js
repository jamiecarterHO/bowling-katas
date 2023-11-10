const bowl = (pins) => {
  return Math.floor(Math.random() * (pins + 1));
};

const frame = () => {
  const firstBowl = bowl(10);
  const secondBowl = bowl(10 - firstBowl);
  return {
    firstBowl: firstBowl,
    secondBowl: secondBowl
  };
};

const game = () => {
 const game = [...Array(10).keys()];
 let scorecard = game.map(() => frame());
 scorecard = handleTenthBowl(scorecard);
 console.log('SCORES',scorecard);
 return scorecard;
};

const handleTenthBowl = (scorecard) => {
  const tenthFrame = scorecard[9];
  const tenthFrameScore = Object.values(tenthFrame).reduce((acc, bowl) => acc + bowl);
  if (tenthFrameScore === 10) {
   tenthFrame.thirdBowl = bowl(10);
  };
  return scorecard;
}

module.exports = {
  bowl,
  frame,
  game,
  handleTenthBowl
};
