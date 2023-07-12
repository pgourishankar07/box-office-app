import { Link } from 'react-router-dom';

const LINKS = [
  { text: 'Home', to: '/' },
  { text: 'Contact', to: '/contact' },
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
