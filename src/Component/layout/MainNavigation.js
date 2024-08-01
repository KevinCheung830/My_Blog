import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Nova's Home Page</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Coding'>Coding</Link>
          </li>
          <li>
            <Link to='/ACGColle'>ACGColle</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;