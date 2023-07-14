const BASE_URL = 'https://api.tvmaze.com';

export function searchShows(query, srchOpt) {
  return apiGetData(`/search/${srchOpt}?q=${query}`);
}

async function apiGetData(queryString) {
  const res = await fetch(`${BASE_URL}${queryString}`);
  const body = await res.json();
  return body;
}
