import './Users.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import { Link } from 'react-router-dom';

const Users = () => {
  const testDataset = [
    <Link to="/users/show">User 1</Link>,
    <Link to="/users/show">User 2</Link>,
    <Link to="/users/show">User 3</Link>,
    <Link to="/users/show">User 4</Link>,
  ];

  const content = {
    title: 'User Management',
    text: '',
  };

  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <ListTemplate dataset={testDataset} content={content} />
      </div>
    </div>
  );
};

export default Users;

