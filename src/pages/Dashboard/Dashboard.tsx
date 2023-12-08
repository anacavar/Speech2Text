import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import './Dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const welcome = user ? `Hello, ${user}!` : 'Hello!';

  function logoutFunction() {
    dispatch(logOut());
  }

  return (
    <div className="s2t-content">
      <div className="s2t-side-menu">
        <p>{welcome}</p>
        <button onClick={logoutFunction}>Log Out</button>
      </div>
      <div className="s2t-tablet">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;

