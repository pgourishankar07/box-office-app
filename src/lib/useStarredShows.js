import { useReducer, useEffect } from 'react';

function usePersistReducer(reducer, initialState, localStorageKey) {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistVal = localStorage.getItem(localStorageKey);
    return persistVal ? JSON.parse(persistVal) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
}

function starredShowsReducer(currStarred, action) {
  switch (action.type) {
    case 'STAR':
      return currStarred.concat(action.showId);
    case 'UNSTAR':
      return currStarred.filter(i => i !== action.showId);
    default:
      return currStarred;
  }
}

export function useStarredShows() {
  return usePersistReducer(starredShowsReducer, [], 'starredShows');
}
