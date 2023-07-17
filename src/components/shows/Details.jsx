function Details({ status, premiered, network }) {
  return (
    <>
      <p>Status :{status}</p>
      <p>
        Premiered :{premiered} {network ? `on ${network.name}` : null}
      </p>
    </>
  );
}
export default Details;
