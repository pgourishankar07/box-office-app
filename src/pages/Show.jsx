import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { searchShowById } from '../api/tvmazeData';
import ShowLayout from '../components/shows/ShowLayout';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import { TextCenter } from '../components/common/TextCenter';
function Show() {
  const { showId } = useParams();

  const { data: apiData, error: apiErr } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => {
      return searchShowById(showId);
    },
  });

  if (apiErr) {
    return <TextCenter>An Error occured: {apiErr.message}</TextCenter>;
  }
  if (apiData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Back</Link>
        </BackHomeWrapper>

        <ShowLayout
          image={apiData.image}
          name={apiData.name}
          rating={apiData.rating}
          genres={apiData.genres}
          summary={apiData.summary}
        />

        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={apiData.status}
            premiered={apiData.premiered}
            network={apiData.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={apiData._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={apiData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Loading...</TextCenter>;
}

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: white;
    text-decoration: none;
    border: 1px solid red;
    border-radius: 12px;
    &:hover {
      text-decoration: none;
      cursor: pointer;
      background-color: ${({ theme }) => theme.mainColors.blue};
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
    color: red;
  }
`;
