const BASE_URL = 'https://api.tvmaze.com';

async function apiGetData(queryString) {
  const res = await fetch(`${BASE_URL}${queryString}`);
  const body = await res.json();
  return body;
}

export function searchShowsActors(query, srchOpt) {
  return apiGetData(`/search/${srchOpt}?q=${query}`);
}

export function searchShowById(showId) {
  return apiGetData(`/shows/${showId}`);
}
