import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [val, setVal] = useState('');
  function change(event) {
    setVal(event.target.value);
  }
  async function Search(event) {
    event.preventDefault();
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
    const body = await res.json();
    console.log(body);
  }
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/contact">Go to Contact page</Link>
      <form onSubmit={Search}>
        <input type="text" onChange={change} value={val}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;
