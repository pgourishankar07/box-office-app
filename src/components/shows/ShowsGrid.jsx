import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';

function ShowsGrid({ apiData }) {
  const [starredShows, dispatchStarred] = useStarredShows();

  function onStarMeClick(showId) {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  }

  return (
    <FlexGrid>
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
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
}

export default ShowsGrid;
