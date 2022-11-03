const isAuthorised = (auth: string | undefined) => {
  const env: string | undefined = process.env.NODE_ENV;
  // if ((env === 'production' && auth === `Berlego${process.env.NEXT_PUBLIC_SECRET_KEY}`) || env !== 'production') {
  //   return true;
  // } else {
  //   return false;
  // }

  return true;

  /* ---------------------------------------------------------------------------------------------- */
  /*   Initially Auth in production should always be forbidden unless we have our secret key        */
  /*   For visibility purposes we will remove auth so the team can review the API content in browser*/
  /* ---------------------------------------------------------------------------------------------- */
};

export default isAuthorised;
