import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { searchShowsByIds } from '../api/tvmazeData';
import ShowsGrid from '../components/shows/ShowsGrid';
function Starred() {
  const [starredShows] = useStarredShows();
  const { data: apiStarData, error: apiStarErr } = useQuery({
    queryKey: ['starred', starredShows],
    queryFn: () =>
      searchShowsByIds(starredShows).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  console.log({ apiStarData });

  if (apiStarData && apiStarData.length > 0) {
    return <ShowsGrid apiData={apiStarData} />;
  }
  if (apiStarData && apiStarData.length === 0) {
    return <>No Shows were Starred</>;
  }
  if (apiStarErr) {
    return <>An Error occured : {apiStarErr.message} </>;
  }

  return <>Starred Page Loading..</>;
}

export default Starred;
