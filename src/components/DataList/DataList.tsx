import { Link } from 'react-router-dom';
import './DataList.scss';

const DataList = ({ dataset }) => {
  return (
    <div className="s2t-data-list">
      {dataset.map((item) => (
        <div className="s2t-data-item">
          <Link to="/users/show">{item}</Link>
        </div>
      ))}
    </div>
  );
};

export default DataList;

