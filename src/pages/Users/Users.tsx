import './Users.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import DataList from '../../components/DataList/DataList';
import NewUserForm from '../../components/NewUserForm/NewUserForm';

const Users = () => {
  const testDataset = ['User 1', 'User 2', 'User 3', 'User 4'];

  const list = <DataList dataset={testDataset} />;

  const form = <NewUserForm />;

  const content = {
    title: 'User Management',
    text: '',
    list: list,
    popupContent: {
      title: 'test',
      text: 'test',
      form: form,
    },
  };

  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <ListTemplate content={content} />
      </div>
    </div>
  );
};

export default Users;

