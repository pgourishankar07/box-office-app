import { useParams } from 'react-router-dom';
function Show() {
  const { showId } = useParams();
  return <>Show Page for {showId}</>;
}

export default Show;
