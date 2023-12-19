import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const Instances = () => {
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
        <h1>Instances</h1>
      </div>
    </div>
  );
};

export default Instances;

