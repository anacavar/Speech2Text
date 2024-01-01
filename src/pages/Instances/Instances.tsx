import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import NewInstanceForm from '../../components/NewInstanceForm/NewInstanceForm';
import { useEffect, useState } from 'react';
import DataList from '../../components/DataList/DataList';
import EditInstanceForm from '../../components/EditInstanceForm/EditInstanceForm';

const Instances = () => {
  const testDataset = ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4'];
  const newInstanceForm = <NewInstanceForm />;
  const form = <EditInstanceForm />;
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

  const addNewTabs = [
    {
      id: 'show',
      label: 'Show',
      content: 'This is the content to be shown.',
      form: newInstanceForm,
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
    title: 'Instances',
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

export default Instances;

