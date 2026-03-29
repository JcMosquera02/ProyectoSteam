const BASE = 'https://api.tvmaze.com';

const _obtener = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error API: ${res.status}`);
  return res.json();
};