import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
const Nav = () => {
  return (
    <div>
      <nav className={navStyles.nav}>
        <div className={navStyles.logo}>SN</div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/project">Projects</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Link href="/resume">
          <button className={navStyles.button}>Download Resume</button>
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
