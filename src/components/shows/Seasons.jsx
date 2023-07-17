function Seasons({ seasons }) {
  return (
    <>
      <p>Seasons : {seasons.length}</p>
      <div>
        {seasons.map(i => (
          <div key={i.id}>
            <p>Season : {i.number}</p>
            <p>Episodes : {i.episodeOrder}</p>
            <div>
              {i.premiereDate} - {i.endDate}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Seasons;
