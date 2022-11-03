export const getDomain = () => {
  const domain: string = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/' : 'http://localhost:3000/';
  return domain;
};
