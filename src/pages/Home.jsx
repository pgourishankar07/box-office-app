import { useState } from 'react';
import { searchShows } from './../api/tvmazeData';
import SearchForm from '../components/SearchForm';

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
    if (apiData) {
      if (apiData[0].show) {
        return apiData.map(data => {
          return <div key={data.show.id}>{data.show.name}</div>;
        });
      } else {
        return apiData.map(data => {
          return <div key={data.person.id}>{data.person.name}</div>;
        });
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
