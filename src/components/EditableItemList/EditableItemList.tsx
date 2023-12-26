import './EditableItemList.scss';
import EditableField from '../EditableField/EditableField';

const EditableItemList = ({ dataset }) => {
  return (
    <div className="s2t-data-list">
      {dataset.map((item) => (
        <div className="s2t-data-item">
          <EditableField initial={item} />
        </div>
      ))}
    </div>
  );
};

export default EditableItemList;

