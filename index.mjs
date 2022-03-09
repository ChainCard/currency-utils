// constants
import CURRENCY, { CRYPTO, FIAT } from './constants/currency.mjs';
export const constants = {
  CURRENCY,
  CRYPTO,
  FIAT,
};

// utils
import isCrypto from './utils/isCrypto.mjs';
import isFiat from './utils/isFiat.mjs';
import roundCurrency from './utils/roundCurrency.mjs';
export const utils = {
  isCrypto,
  isFiat,
  roundCurrency,
};
