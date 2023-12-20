import './ShowUser.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const ShowUser = () => {
  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <p>
          add/remove instancu URl, boolean radio button Da/Ne - default da
          tablica instanci disableat instancu - ostane u tablici samo je
          disabled, može se enableat get statistics - nekako displayat all API
          je za dobit sve instance - dohvaća sve od ulogiranog usera
        </p>
      </div>
    </div>
  );
};

export default ShowUser;

