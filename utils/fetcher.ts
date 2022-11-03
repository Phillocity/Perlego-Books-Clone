import { getDomain } from '@/utils/domainName';

export const fetchData = async (apiPath: string) => {
  const res = await fetch(`${getDomain()}/api/${apiPath}`, {
    method: 'GET',
    headers: {
      Authorization: `Berlego${process.env.SECRET_KEY}`,
    },
  });

  const response = await res.json();
  return response;
};
