import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
function ActorsGrid({ apiData }) {
  return (
    <FlexGrid>
      {apiData.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          death={data.person.death}
          gender={data.person.gender}
          img={
            data.person.image
              ? data.person.image.medium
              : '/image-not-found.png'
          }
        />
      ))}
    </FlexGrid>
  );
}

export default ActorsGrid;
