import './Users.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import DataList from '../../components/DataList/DataList';
import NewUserForm from '../../components/NewUserForm/NewUserForm';
import { useState, useEffect } from 'react';

const Users = () => {
  const testDataset = ['User 1', 'User 2', 'User 3', 'User 4'];
  const form = <NewUserForm />;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(testDataset);

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = testDataset.filter((item) =>
      item.toLowerCase().includes(lowerCaseQuery),
    );
    setResults(filteredResults);
    console.log(filteredResults);
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const dataListContent = {
    items: results,
    popupContent: {
      title: 'test',
      text: 'test',
      form: form,
    },
  };

  const list = <DataList dataset={dataListContent} />;

  const content = {
    title: 'User Management',
    text: '',
    list: list,
    handleSearch: handleChange,
    buttonLabel: 'Add New',
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

