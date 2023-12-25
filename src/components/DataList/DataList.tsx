import { Link } from 'react-router-dom';
import './DataList.scss';
import EditableField from '../EditableField/EditableField';

const DataList = ({ dataset }) => {
  return (
    <div className="s2t-data-list">
      {dataset.map((item) => (
        <div className="s2t-data-item">{item}</div>
      ))}
    </div>
  );
};

export default DataList;

