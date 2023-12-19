import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import './SideMenu.scss';

const SideMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const welcome = user ? `Hello, ${user}!` : 'Hello!';

  function logoutFunction() {
    dispatch(logOut());
  }

  return (
    <div className="s2t-side-menu">
      <h2>{welcome}</h2>
      <menu>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/instances">Instances</Link>
        <Link to="/users">User Management</Link>
      </menu>
      <button onClick={logoutFunction} id="log-out">
        Log Out
      </button>
    </div>
  );
};

export default SideMenu;

