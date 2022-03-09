import { CRYPTO } from '../constants/currency.mjs';

/**
 * @param currency {string}
 * @return {boolean}
 */
const isCrypto = currency => Object.values(CRYPTO).includes(currency);

export default isCrypto;
