import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import EditableField from '../../components/EditableField/EditableField';

const Instances = () => {
  // const testDataset = ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4'];
  const testDataset = [
    <EditableField initial="Instance1" />,
    <EditableField initial="Instance2" />,
    <EditableField initial="Instance3" />,
    <EditableField initial="Instance4" />,
  ];

  const content = {
    title: 'Instances',
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

export default Instances;

