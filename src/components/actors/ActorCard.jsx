// import { Link } from 'react-router-dom';

function ActorCard({ name, img, gender, country, birthday, death }) {
  return (
    <>
      <div>
        <img src={img} />
      </div>

      <h1>
        {name} {gender ? `(${gender}) ` : '(Unknown)'}
      </h1>
      <p>{country ? `Comes from ${country} ` : 'Unknown Country'}</p>
      <p>{birthday ? `Born on ${birthday} ` : 'Birthday Not Available'}</p>
      <p>{death ? `Died on  ${death} ` : 'Alive'}</p>
    </>
  );
}

export default ActorCard;
