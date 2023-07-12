import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/contact">Go to Contact page</Link>
    </div>
  );
}

export default Home;
