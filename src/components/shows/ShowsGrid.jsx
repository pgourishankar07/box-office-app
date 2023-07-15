import ShowCard from './ShowCard';

function ShowsGrid({ apiData }) {
  return (
    <>
      {apiData.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          img={
            data.show.image ? data.show.image.medium : '/image-not-found.png'
          }
          id={data.show.id}
          summary={data.show.summary}
        />
      ))}
    </>
  );
}

export default ShowsGrid;
