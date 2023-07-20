import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchShowsActors } from './../api/tvmazeData';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { TextCenter } from '../components/common/TextCenter';

function Home() {
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
      return <TextCenter>An Error occured : {apiErr.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No Data Found</TextCenter>;
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
