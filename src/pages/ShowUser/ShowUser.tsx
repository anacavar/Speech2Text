import './ShowUser.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const ShowUser = () => {
  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <p>Hello, user</p>
      </div>
    </div>
  );
};

export default ShowUser;

