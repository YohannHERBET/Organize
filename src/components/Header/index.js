import './header.scss';
import { Link } from 'react-router-dom';

import logo from 'src/assets/logo2.png';
import LogButton from './logButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {

  const isLogged = useSelector((state) => state.reducer.isLogged);

  return (
  <>
  <div className="home-header" id="home-header">
    <div className="home-header-left">      
      {!isLogged && (
        <Link to="/">
          <img src={logo} alt="organize-logo" className="logo" />
        </Link>
      )}
      {isLogged && (
        <Link to="/dashboard">
          <img src={logo} alt="organize-logo" className="logo" />
        </Link>
      )}
      {!isLogged && (
      <Link to="/">
        <h1 className="header-title">O'rganize</h1>
      </Link>
      )}
      {isLogged && (
      <Link to="/dashboard">
        <h1 className="header-title">O'rganize</h1>
      </Link>
      )}
    </div>
    <div className="home-header-right">
      <LogButton />
    </div>
  </div>
  </>
  );
};

export default Header;
