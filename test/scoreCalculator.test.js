const { isStrike, isSpare } = require('../scoreCalculator');

describe('isStrike', () => {
  const strikeFrame = { firstBowl: 10, secondBowl: 0 };
  const notStrikeFrame = { firstBowl: 9, secondBowl: 0 };
  test('Returns true for a strike frame', () => {
    gotStrikeWithStrikeFrame = isStrike(strikeFrame);
    expect(gotStrikeWithStrikeFrame).toBe(true);
  });
  test('Returns false for a non-strike frame', () => {
    gotStrikeWithNotStrikeFrame = isStrike(notStrikeFrame);
    expect(gotStrikeWithNotStrikeFrame).toBe(false);
  });
});

describe('isSpare', () => {
  const spareFrame = { firstBowl: 5, secondBowl: 5 }
  const notSpareFrame = { firstBowl: 9, secondBowl: 0 };
  test('Returns true for a spare frame', () => {
    gotSpareWithSpareFrame = isSpare(spareFrame);
    expect(gotSpareWithSpareFrame).toBe(true);
  });
  test('Returns false for a non-spare frame', () => {
    gotSpareWithNotSpareFrame = isSpare(notSpareFrame);
    expect(gotSpareWithNotSpareFrame).toBe(false);
  });

})