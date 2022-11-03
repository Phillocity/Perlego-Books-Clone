import { getDomain } from '@/utils/domainName';

export const fetchData = async (apiPath: string) => {
  const res = await fetch(`${getDomain()}api/${apiPath}`, {
    method: 'GET',
    headers: {
      Authorization: `Perlego636D7B8896E513F83E62CA367BB6E`,
    },
  });

  const response = await res.json();
  return response;
};
