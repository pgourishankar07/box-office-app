function ShowCard({ name, img, id, summary, onStarMeClick, isStarred }) {
  const summaryFormatted = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No desciption';
  return (
    <>
      <div>
        <img src={img} />
      </div>

      <h1>{name}</h1>

      <p>{summaryFormatted}...</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          {isStarred ? 'Unstar Me' : 'Star Me'}
        </button>
      </div>
    </>
  );
}

export default ShowCard;
