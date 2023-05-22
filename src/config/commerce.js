import Commerce from '@chec/commerce.js';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

const commerce = new Commerce(
  process.env.GATSBY_CHEC_PUBLIC_KEY,
  process.env.NODE_ENV === 'development',
  commerceConfig
);

export default commerce;
