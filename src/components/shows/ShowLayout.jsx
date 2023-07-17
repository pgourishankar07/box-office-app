function ShowLayout({ image, name, rating, genres, summary }) {
  return (
    <>
      <img src={image ? image.original : '/image-not-found.png'} alt={name} />
      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'No Ratings'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres :
          <div>
            {genres.map(i => {
              return <span key={i}>-{i} </span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowLayout;

// dangerouslySetInnerHTML --- is to treat html fetched data as HTML it is said dangerous becoz it may inject virus
