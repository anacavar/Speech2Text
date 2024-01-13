import './NewUserForm.scss';
import { useState } from 'react';
import axios from 'axios';

const NewUserForm = () => {
  const [checked, setChecked] = useState(true);
  const apiUrl = 'http://localhost:8080/api/v1/admin/user/add';

  const someJsonData = {
    username: 'New User',
    password: 'mysecurepassword2',
    itemsProcessed: '0',
  };

  const handleSubmit = async () => {
    console.log('click!');
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(apiUrl, someJsonData);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const checkboxClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="s2t-addnewuser-form">
      <label>Enter Username:</label>
      <input type="name" id="name" />
      <label htmlFor="password">Set Password:</label>
      <input type="password" id="password" />
      <label htmlFor="password">Confirm Password:</label>
      <input type="password" id="password" />
      <label htmlFor="password">User is admin</label>
      <input type="checkbox" onChange={checkboxClick} />
      <button onClick={handleSubmit}>Create User</button>
      <div className="s2t-success-message">Success message placeholder</div>
    </div>
  );
};

export default NewUserForm;

