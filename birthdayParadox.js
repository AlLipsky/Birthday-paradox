const probabilityCalculation = (days, amount) => {
  let a = (amount * (amount - 1)) / 2;
  let b = (days - 1) / days;
  return 1 - Math.pow(b, a);
};
const chanceByNumberOfRuns = (amount, runsCount) => {
  let days = 365;
  let chance = 0;

  for (i = 1; i <= runsCount; i++) {
    chance = (
      probabilityCalculation(days, amount) +
      chance / runsCount
    ).toFixed(3);
  }
  return `Given ${amount} people, the chance of a shared birthday is ${chance}`;
};

const chanceByAccuracy = (amount, desiredAccuracy) => {
  let days = 365;
  let chance = 1 - Math.exp((amount * -1 * (amount - 1)) / (2 * days));
  let decimalAccuracy = String(desiredAccuracy).split(".")[1].length;
  return `Given ${amount} people, the chance of a shared birthday is ${chance.toFixed(
    decimalAccuracy
  )}`;
};
