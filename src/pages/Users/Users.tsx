import './Users.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import DataList from '../../components/DataList/DataList';
import NewUserForm from '../../components/NewUserForm/NewUserForm';
import { useState, useEffect } from 'react';
import EditUserForm from '../../components/EditUserForm/EditUserForm';
import axios from 'axios';

const Users = () => {
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(true); //dodaj ovaj loader
  const [query, setQuery] = useState('');

  const apiUrl = 'http://localhost:8080/api/v1/admin/user/all'; // should be called as soon as the User screen is opened

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        withCredentials: true,
      });
      setDataArray(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  console.log(dataArray);

  const testDataset = dataArray.map((user) => user.username);
  const [results, setResults] = useState(testDataset);
  console.log('initial results', results);
  console.log('fetched dataset', testDataset);
  const newUserForm = <NewUserForm />;
  const form = <EditUserForm />;

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = testDataset.filter((item) =>
      item.toLowerCase().includes(lowerCaseQuery),
    );
    console.log('filtered results', filteredResults);
    setResults(filteredResults);
  }, [query, testDataset]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const addNewTabs = [
    {
      id: 'new-user',
      label: 'New User',
      content: 'This is the content to be shown.',
      form: newUserForm,
    },
    // Add as many tabs as you like
  ];

  const tabs = [
    {
      id: 'show',
      label: 'Show',
      content: 'This is the content to be shown.',
      form: form,
    },
    {
      id: 'edit',
      label: 'Edit',
      content: 'This is the content to be edited.',
      form: form,
    },
    {
      id: 'custom',
      label: 'Custom',
      content: 'This is some custom content.',
      form: form,
    },
    // Add as many tabs as you like
  ];

  const dataListContent = {
    items: results,
    tabs: tabs,
  };

  const list = <DataList dataset={dataListContent} />;

  const listTemplateContent = {
    title: 'User Management',
    text: '',
    list: list,
    handleSearch: handleChange,
    buttonLabel: 'Add New',
    tabs: addNewTabs,
  };

  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <ListTemplate content={listTemplateContent} />
      </div>
    </div>
  );
};

export default Users;

