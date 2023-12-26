import './NewUserForm.scss';
import { useState } from 'react';

const NewUserForm = () => {
  const [checked, setChecked] = useState(true);

  const checkboxClick = () => {
    setChecked(!checked);
  };

  return (
    <form>
      <label>Enter Username:</label>
      <input type="name" id="name" />
      <label htmlFor="password">Set Password:</label>
      <input type="password" id="password" />
      <label htmlFor="password">Confirm Password:</label>
      <input type="password" id="password" />
      <label htmlFor="password">User is admin</label>
      <input type="checkbox" onChange={checkboxClick} />
      <button>Create User</button>
      <div className="s2t-success-message">Success message placeholder</div>
    </form>
  );
};

export default NewUserForm;

