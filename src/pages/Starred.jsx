import { useStarredShows } from '../lib/useStarredShows';
function Starred() {
  const [starredShows] = useStarredShows();
  return <>Starred Page,starred : {starredShows.length}</>;
}

export default Starred;
