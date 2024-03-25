export const cgt = {
  API: {
    HOST:
      process.env.NODE_ENV === 'production'
        ? 'https://api-shop-lvfc.vercel.app'
        : 'http://localhost:3000',
  },
};
