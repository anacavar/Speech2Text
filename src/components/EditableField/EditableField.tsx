import { useState } from 'react';
import './EditableField.scss';

const EditableField = ({ initial }) => {
  const initialValue = initial; // Initial URL
  const [value, setValue] = useState(initialValue);
  const [isEditing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(initialValue);

  const handleEditClick = () => {
    setEditing(true);
    setEditedValue(value); // Save the current URL for editing
  };

  const handleSaveClick = () => {
    setEditing(false);
    setValue(editedValue); // Update the URL with the edited value
  };

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  return (
    <div className="s2t-editable-field">
      {isEditing ? (
        <>
          <input type="text" value={editedValue} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p>URL: {value}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EditableField;

