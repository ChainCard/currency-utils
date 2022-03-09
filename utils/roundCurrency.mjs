import CURRENCY from '../constants/currency.mjs';

/**
 * @param input {number}
 * @param numberOfDec {number}
 * @returns {number}
 */
const roundToNumOfDec = (input, numberOfDec) => {
  if (!input) { return 0; }

  const match = `${input}`.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }

  const decimals = Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));

  if (decimals > numberOfDec){
    input = parseFloat(input.toFixed(numberOfDec));
  }

  return input;
};

/**
 * @param amount {number}
 * @param currency {string}
 * @returns {number}
 */
const roundCurrency = (amount, currency) => {
  let numOfDec;

  switch (currency) {
    case CURRENCY.BTC:
    case CURRENCY.ETH:
      numOfDec = 8;
      break;
    case CURRENCY.CAD:
    case CURRENCY.USD:
      numOfDec = 2;
      break;
  }

  return typeof numOfDec === 'number' ?
    roundToNumOfDec(amount, numOfDec) :
    (amount || 0);
};

export default roundCurrency;
