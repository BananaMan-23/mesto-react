import logo from "../images/Vector.svg";
import { Link, withRouter, useLocation } from "react-router-dom";
import Info from './Info'

function Header({ loggedIn, email, onSignOut }) {
  const location = useLocation()
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      {
        loggedIn ?
        <Info email={email} loggedIn={loggedIn} onSignOut={onSignOut} /> :
        (<>
          {
            location.pathname === '/sign-up' ? 
            <Link className='header__link' to='/sign-in'>Регистрация</Link> :
            <Link className='header__link' to='/sign-up'>Войти</Link>
          }
        </>)
      }
    </header>
  );
}

export default Header;
