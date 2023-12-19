import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import './Dashboard.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const welcome = user ? `Hello, ${user}!` : 'Hello!';

  function logoutFunction() {
    dispatch(logOut());
  }

  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <h1>Dashboard</h1>
        <p>Stats...</p>
      </div>
    </div>
  );
};

export default Dashboard;

