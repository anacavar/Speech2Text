// import { Link } from 'react-router-dom';
import './DataList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Popup from '../Popup/Popup';

const DataList = ({ dataset }) => {
  return (
    <div className="s2t-data-list">
      {dataset.items.map((item, index) => (
        <div className="s2t-data-item" key={index}>
          <Popup buttonLabel={item} tabs={dataset.tabs} />
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      ))}
    </div>
  );
};

export default DataList;

