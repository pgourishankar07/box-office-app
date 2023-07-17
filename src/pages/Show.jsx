import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchShowById } from '../api/tvmazeData';

function Show() {
  const { showId } = useParams();

  const [apiData, setapiData] = useState(null);
  const [apiErr, setApiErr] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await searchShowById(showId);
        console.log(data);
        setapiData(data);
      } catch (error) {
        setApiErr(error);
      }
    }
    fetchData();
  }, [showId]);

  if (apiErr) {
    return <>An Error occured: {apiErr.message}</>;
  }
  if (apiData) {
    return <>Got Data : {apiData.name}</>;
  }

  return <>Loading...</>;
}

export default Show;
