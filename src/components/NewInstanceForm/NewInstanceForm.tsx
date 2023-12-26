import './NewInstanceForm.scss';
import { useState } from 'react';

const NewInstanceForm = () => {
  const [checked, setChecked] = useState(true);

  const checkboxClick = () => {
    setChecked(!checked);
  };

  return (
    <form>
      <label>URL:</label>
      <input type="URL" id="url-input" />
      <label htmlFor="password">Instance is active</label>
      <input type="checkbox" onChange={checkboxClick} />
      <button>Create Instance</button>
      <div className="s2t-success-message">Success message placeholder</div>
    </form>
  );
};

export default NewInstanceForm;

