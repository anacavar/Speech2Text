import './EditableItemList.scss';
import EditableField from '../EditableField/EditableField';

const EditableItemList = ({ dataset }) => {
  return (
    <div className="s2t-editable-list">
      {dataset.map((item) => (
        <div className="s2t-editable-item">
          <EditableField initial={item} />
        </div>
      ))}
    </div>
  );
};

export default EditableItemList;

