import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import './SideMenu.scss';

const SideMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const welcome = user ? `Hello, ${user}!` : 'Hello!';
  const { pathname } = useLocation();

  function logoutFunction() {
    dispatch(logOut());
  }

  return (
    <div className="s2t-side-menu">
      <h2>{welcome}</h2>
      <menu>
        <Link
          to="/dashboard"
          className={pathname == '/dashboard' ? 'current' : ''}
        >
          Dashboard
        </Link>
        <Link
          to="/instances"
          className={pathname == '/instances' ? 'current' : ''}
        >
          Instances
        </Link>
        <Link to="/users" className={pathname == '/users' ? 'current' : ''}>
          User Management
        </Link>
      </menu>
      <button onClick={logoutFunction} id="log-out">
        Log Out
      </button>
    </div>
  );
};

export default SideMenu;

