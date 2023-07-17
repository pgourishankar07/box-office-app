import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchShowById } from '../api/tvmazeData';

function Show() {
  const { showId } = useParams();

  const { data: apiData, error: apiErr } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => {
      return searchShowById(showId);
    },
  });
  //react-query npm package for fetching data instead of usinf useEffect which will fetch twice due to strictmode.
  // useQuery --- is a custom hook created by tansact reat query lib to fetch data.
  //querKey --- is like dependency variable if that changes reRender takes place.
  //querFn --- is changes to happen whenever dependency changes.

  if (apiErr) {
    return <>An Error occured: {apiErr.message}</>;
  }
  if (apiData) {
    return <>Got Data : {apiData.name}</>;
  }

  return <>Loading...</>;
}

export default Show;
