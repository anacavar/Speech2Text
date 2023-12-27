import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import EditableItemList from '../../components/EditableItemList/EditableItemList';
import NewInstanceForm from '../../components/NewInstanceForm/NewInstanceForm';
import { useState } from 'react';

const Instances = () => {
  const testDataset = ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4'];
  const form = <NewInstanceForm />;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(testDataset);

  const handleSearch = () => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = testDataset.filter((item) =>
      item.toLowerCase().includes(lowerCaseQuery),
    );
    setResults(filteredResults);
    console.log(filteredResults);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    handleSearch();
  };

  const list = <EditableItemList dataset={results} />;

  const content = {
    title: 'Instances',
    text: '',
    list: list,
    handleSearch: handleChange,
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

export default Instances;

