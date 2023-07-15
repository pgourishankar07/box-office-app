import { useState } from 'react';

function SearchForm({ SearchData }) {
  const [val, setVal] = useState('');
  const [srchOpt, setSrchOpt] = useState('shows');

  function changeVal(event) {
    setVal(event.target.value);
  }

  function changeOpt(event) {
    setSrchOpt(event.target.value);
  }

  function Search(event) {
    event.preventDefault();
    SearchData(val, srchOpt);
  }

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
    </div>
  );
}

export default SearchForm;
