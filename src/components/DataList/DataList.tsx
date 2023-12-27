import { Link } from 'react-router-dom';
import './DataList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const DataList = ({ dataset }) => {
  return (
    <div className="s2t-data-list">
      {dataset.map((item, index) => (
        <div className="s2t-data-item" key={index}>
          <Link to="/users/show">{item}</Link>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      ))}
    </div>
  );
};

export default DataList;

