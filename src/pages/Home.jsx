import { useState, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchShowsActors } from './../api/tvmazeData';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
//____

function reducerFn(currCount, action) {
  //action is whatever we dispatch as an object
  switch (action.type) {
    case 'INCREMENT':
      return currCount + 1;
    case 'DECREMENT':
      return currCount - 1;
    case 'RESET':
      return 0;
    case 'SET':
      return action.newVal;
  }
  return 0;
}

function Home() {
  const [counter, dispatch] = useReducer(reducerFn, 0);
  function inc() {
    dispatch({ type: 'INCREMENT' });
  }
  function dec() {
    dispatch({ type: 'DECREMENT' });
  }
  function rst() {
    dispatch({ type: 'RESET' });
  }
  function set50() {
    dispatch({ type: 'SET', newVal: 50 });
  }
  //____

  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiErr } = useQuery({
    queryKey: ['search', filter],
    queryFn: () => {
      return searchShowsActors(filter.val, filter.srchOpt);
    },
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  async function Search(val, srchOpt) {
    setFilter({ val, srchOpt });
  }

  function renderData() {
    if (apiErr) {
      return <>An Error occured : {apiErr.message}</>;
    }

    if (apiData?.length === 0) {
      return <>No Data Found</>;
    }

    if (apiData) {
      if (apiData[0].show) {
        return <ShowsGrid apiData={apiData} />;
      } else {
        return <ActorsGrid apiData={apiData} />;
      }
    }
    return null;
  }
  // ____________________________________________________________________
  return (
    <>
      <SearchForm SearchData={Search} />

      <div>Counter : {counter}</div>
      <button type="button" onClick={inc}>
        Increment
      </button>
      <button type="button" onClick={dec}>
        Decrement
      </button>
      <button type="button" onClick={rst}>
        Reset
      </button>
      <button type="button" onClick={set50}>
        Set to 50
      </button>

      <div>{renderData()}</div>
    </>
  );
}

export default Home;
