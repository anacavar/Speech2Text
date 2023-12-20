import './Instances.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import ListTemplate from '../../components/ListTemplate/ListTemplate';

const Instances = () => {
  const testDataset = ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4'];

  const content = {
    title: 'Instances',
    text: 'add/remove instancu URl, boolean radio button Da/Ne - default da tablica instanci disableat instancu - ostane u tablici samo je disabled, može se enableat get statistics - nekako displayat all API je za dobit sve instance - dohvaća sve od ulogiranog usera',
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

