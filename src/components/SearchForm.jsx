import { useState } from 'react';
import CustBtns from './CustBtns';

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

        <CustBtns
          label="Shows"
          name="search-options"
          value="shows"
          checked={srchOpt === 'shows'}
          onChange={changeOpt}
        />

        <CustBtns
          label="Actors"
          name="search-options"
          value="people"
          checked={srchOpt === 'people'}
          onChange={changeOpt}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
