import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import './Dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();

  const clicketyClick = () => {
    console.log('log out');
    // dispatch(logOut(null)); // how do I utilize this?
  };

  const user = useSelector(selectCurrentUser);

  const welcome = user ? `Hello, ${user}!` : 'Hello!';

  return (
    <div className="s2t-content">
      <div className="s2t-side-menu">
        <p>{welcome}</p>
        <button onClick={clicketyClick}>Log Out</button>
      </div>
      <div className="s2t-tablet">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;

