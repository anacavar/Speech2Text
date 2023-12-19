import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import './Users.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const Users = () => {
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
        <h1>User Management</h1>
        <p>
          dodavat usere - username i pass editirat - updateat lozinku- brisat
          usera po usernameu može napravit usera adminom
        </p>
      </div>
    </div>
  );
};

export default Users;

