import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import EditableItemList from '../../components/EditableItemList/EditableItemList';
import NewInstanceForm from '../../components/NewInstanceForm/NewInstanceForm';

const Instances = () => {
  const testDataset = ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4'];

  const list = <EditableItemList dataset={testDataset} />;

  const form = <NewInstanceForm />;

  const content = {
    title: 'Instances',
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

export default Instances;

