import { Link } from 'react-router-dom';
import './DataList.scss';

const DataList = ({ dataset }) => {
  return (
    <div className="s2t-data-list">
      {dataset.map((item) => (
        <Link to="/instances/show" className="s2t-data-item">
          {item}
        </Link>
      ))}
    </div>
  );
};

export default DataList;

