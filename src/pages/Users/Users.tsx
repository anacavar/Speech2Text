import './Users.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';

const Users = () => {
  const testDataset = ['User 1', 'User 2', 'User 3', 'User 4'];

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

