import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchShowById } from '../api/tvmazeData';
import ShowLayout from '../components/shows/ShowLayout';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

function Show() {
  const { showId } = useParams();

  const { data: apiData, error: apiErr } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => {
      return searchShowById(showId);
    },
  });

  if (apiErr) {
    return <>An Error occured: {apiErr.message}</>;
  }
  if (apiData) {
    return (
      <>
        <div>
          <Link to="/">Back</Link>
        </div>
        <ShowLayout
          image={apiData.image}
          name={apiData.name}
          rating={apiData.rating}
          genres={apiData.genres}
          summary={apiData.summary}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={apiData.status}
            premiered={apiData.premiered}
            network={apiData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={apiData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={apiData._embedded.cast} />
        </div>
      </>
    );
  }

  return <>Loading...</>;
}

export default Show;
