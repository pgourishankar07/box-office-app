import { Link } from 'react-router-dom';

const LINKS = [
  { text: 'Home', to: '/' },
  { text: 'Starred', to: '/starred' },
];

function Navs() {
  return (
    <>
      <ul>
        {LINKS.map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navs;
