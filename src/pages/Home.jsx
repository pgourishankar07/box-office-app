import { useState } from 'react';
import { searchShows } from './../api/tvmazeData';

function Home() {
  const [val, setVal] = useState('');
  const [apiData, setapiData] = useState(null);
  const [apiErr, setApiErr] = useState(null);
  const [srchOpt, setSrchOpt] = useState('shows');

  function changeVal(event) {
    setVal(event.target.value);
  }

  function changeOpt(event) {
    setSrchOpt(event.target.value);
  }

  async function Search(event) {
    event.preventDefault();
    try {
      setApiErr(null);
      const result = await searchShows(val, srchOpt);
      setapiData(result);
    } catch (error) {
      setApiErr(error);
    }
  }

  function renderData() {
    if (apiErr) {
      return <>An Error occured : {apiErr.message}</>;
    }
    if (apiData) {
      if (apiData[0].show) {
        return apiData.map(data => {
          return <div key={data.show.id}>{data.show.name}</div>;
        });
      } else {
        return apiData.map(data => {
          return <div key={data.person.id}>{data.person.name}</div>;
        });
      }
    }
    return null;
  }
  // ____________________________________________________________________
  return (
    <div>
      <form onSubmit={Search}>
        <input type="text" onChange={changeVal} value={val}></input>

        <label>
          Shows
          <input
            type="radio"
            name="search-options"
            value="shows"
            checked={srchOpt === 'shows'}
            onChange={changeOpt}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-options"
            value="people"
            checked={srchOpt === 'people'}
            onChange={changeOpt}
          />
        </label>

        <button type="submit">Search</button>
      </form>
      <div>{renderData()}</div>
    </div>
  );
}

export default Home;
