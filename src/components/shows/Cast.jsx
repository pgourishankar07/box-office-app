function Cast({ cast }) {
  return (
    <>
      {cast.map(i => (
        <div key={i.person.id}>
          <div>
            <img
              src={
                i.person.image ? i.person.image.medium : '/image-not-found.png'
              }
            />
          </div>
          <div>
            {i.person.name} | {i.character.name}
          </div>
        </div>
      ))}
    </>
  );
}

export default Cast;
