import { useReducer, useEffect } from 'react';
import ShowCard from './ShowCard';

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

function ShowsGrid({ apiData }) {
  const [starredShows, dispatchStarred] = usePersistReducer(
    starredShowsReducer,
    [],
    'starredShows'
  );

  function onStarMeClick(showId) {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  }

  return (
    <>
      {apiData.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          img={
            data.show.image ? data.show.image.medium : '/image-not-found.png'
          }
          id={data.show.id}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </>
  );
}

export default ShowsGrid;
