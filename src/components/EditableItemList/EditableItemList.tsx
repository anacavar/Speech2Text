import './EditableItemList.scss';
import EditableField from '../EditableField/EditableField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const EditableItemList = ({ dataset }) => {
  return (
    <div className="s2t-editable-list">
      {dataset.map((item, index) => (
        <div className="s2t-editable-item" key={index}>
          <EditableField initial={item} />
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      ))}
    </div>
  );
};

export default EditableItemList;

