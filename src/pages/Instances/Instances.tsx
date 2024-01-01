import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import NewInstanceForm from '../../components/NewInstanceForm/NewInstanceForm';
import { useEffect, useState } from 'react';
import DataList from '../../components/DataList/DataList';

const Instances = () => {
  const testDataset = ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4'];
  const form = <NewInstanceForm />;
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
    title: 'Instances',
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

export default Instances;

