export const CRYPTO = {
  BTC: 'BTC',
  ETH: 'ETH',
};

export const FIAT = {
  USD: 'USD',
  CAD: 'CAD',
};

const CURRENCY = {
  ...CRYPTO,
  ...FIAT,
};

export default CURRENCY;
