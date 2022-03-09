import { FIAT } from '../constants/currency.mjs';

/**
 * @param currency {string}
 * @return {boolean}
 */
const isFiat = currency => Object.values(FIAT).includes(currency);

export default isFiat;
