import { useState } from 'react';
import { searchShows } from './../api/tvmazeData';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

function Home() {
  const [apiData, setapiData] = useState(null);
  const [apiErr, setApiErr] = useState(null);

  async function Search(val, srchOpt) {
    try {
      setApiErr(null);
      const result = await searchShows(val, srchOpt);
      setapiData(result);
    } catch (error) {
      setApiErr(error);
    }
  }

  function renderData() {
    if (apiErr) {
      return <>An Error occured : {apiErr.message}</>;
    }

    if (apiData?.length === 0) {
      //optional chaining---if apiData is not null([]) then check whether the length =0
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
      <div>{renderData()}</div>
    </>
  );
}

export default Home;
