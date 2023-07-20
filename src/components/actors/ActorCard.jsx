import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

function ActorCard({ name, img, gender, country, birthday, death }) {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img} />
      </SearchImgWrapper>

      <h1>
        {name} {gender ? `(${gender}) ` : '(Unknown)'}
      </h1>
      <p>{country ? `Comes from ${country} ` : 'Unknown Country'}</p>
      <p>{birthday ? `Born on ${birthday} ` : 'Birthday Not Available'}</p>
      <p>{death ? `Died on  ${death} ` : 'Alive'}</p>
    </SearchCard>
  );
}

export default ActorCard;
