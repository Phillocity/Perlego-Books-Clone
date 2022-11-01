const isAuthorised = (auth: string | undefined) => {
  const env: string | undefined = process.env.NODE_ENV;
  if ((env === 'production' && auth === `Berlego${process.env.SECRET_KEY}`) || env !== 'production') {
    return true;
  } else {
    return false;
  }
};

export default isAuthorised;
