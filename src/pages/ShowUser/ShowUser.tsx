import './ShowUser.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const ShowUser = () => {
  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <p>
          <li>dodavat usere (username i pass)</li>
          <li>editirat (updateat lozinku)</li>
          <li>brisat usera po usernameu</li>
          <li>može napravit usera adminom</li>
        </p>
      </div>
    </div>
  );
};

export default ShowUser;

