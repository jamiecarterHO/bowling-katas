const isStrike = (frame) => {
  return frame.firstBowl === 10 ? true : false;
};

const isSpare = (frame) => {
  return frame.firstBowl + frame.secondBowl === 10 ? true : false;
};

module.exports = {
  isStrike,
  isSpare
}