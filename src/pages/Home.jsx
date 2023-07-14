import { useState } from 'react';
import { searchShows } from './../api/tvmazeData';

function Home() {
  const [val, setVal] = useState('');
  const [apiData, setapiData] = useState([]);
  const [apiErr, setApiErr] = useState(null);

  function change(event) {
    setVal(event.target.value);
  }

  async function Search(event) {
    event.preventDefault();
    try {
      setApiErr(null);
      const result = await searchShows(val);
      setapiData(result);
      console.log(result);
    } catch (error) {
      setApiErr(error);
    }
  }

  function renderData() {
    if (apiErr) {
      return <>An Error occured : {apiErr.message}</>;
    }
    if (apiData) {
      return apiData.map(data => {
        return <div key={data.show.id}>{data.show.name}</div>;
      });
    }
    return null;
  }

  return (
    <div>
      <form onSubmit={Search}>
        <input type="text" onChange={change} value={val}></input>
        <button type="submit">Search</button>
      </form>
      <div>{renderData()}</div>
    </div>
  );
}

export default Home;
