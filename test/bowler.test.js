const { bowl, frame, game, handleTenthBowl } = require('../bowler');

test('Basic test to test Jest', () => {
  expect(1 + 1).toBe(2);
});

describe('Bowl returns a number between 0 and 10', () => {
  const score = bowl();
  test('Its a number', () => {expect(typeof score).toBe('number');});
  test('Between one and 10', () => {expect(-1 < score < 11).toBe(true);});
});

describe('Frame', () => {
  const frameScores = frame();
  test('Returns an object', () => {expect(typeof frameScores).toBe('object');});
  test('Has two values', () => {expect(Object.values(frameScores).length).toBe(2);})
  test('Values are numeric', () => {
    expect(typeof Object.values(frameScores).reduce((acc, item) => acc + item)).toBe('number')
  });
  test('The two values are not more than 10 or less than 0', () => {
    expect(-1 < Object.values(frameScores).reduce((acc, item) => acc + item) < 11).toBe(true)
  })
});

describe('Game', () => {
  const scorecard = game();
  test('Returns 10 frames in an array', () => {
    expect(scorecard.length).toBe(10);
  });
  const initialFrames = [
    { firstBowl: 3, secondBowl: 4 },
    { firstBowl: 8, secondBowl: 0 },
    { firstBowl: 9, secondBowl: 1 },
    { firstBowl: 5, secondBowl: 4 },
    { firstBowl: 7, secondBowl: 2 },
    { firstBowl: 7, secondBowl: 3 },
    { firstBowl: 5, secondBowl: 4 },
    { firstBowl: 8, secondBowl: 1 },
    { firstBowl: 2, secondBowl: 1 },
    { firstBowl: 5, secondBowl: 5 }
  ]
  test('A tenth frame score of ten adds an extra bowl', () => {
    const updatedScorecard = handleTenthBowl(initialFrames);
    const bowlsInFrameTen = Object.values(updatedScorecard[9]);
    expect(bowlsInFrameTen.length).toBe(3);
  })
});
