import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import EditableItemList from '../../components/EditableItemList/EditableItemList';

const Instances = () => {
  const testDataset = ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4'];

  const list = <EditableItemList dataset={testDataset} />;

  const content = {
    title: 'Instances',
    text: '',
    list: list,
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

