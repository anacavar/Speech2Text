import './ShowUser.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import EditableField from '../../components/EditableField/EditableField';
import { useState } from 'react';

const ShowUser = () => {
  const initialName = 'Zekoslav Mrkva';
  const [checked, setChecked] = useState(true);

  const checkboxClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <p>
          <li>dodavat usere (username i pass)</li>
          <EditableField initial={initialName} />
          <li>editirat (updateat lozinku)</li>
          <div className="s2t-update-password">
            <label htmlFor="password">Update password:</label>
            <input type="password" id="password" />
            <button>Update</button>
            <div className="s2t-success-message">
              Success message placeholder
            </div>
          </div>
          <div className="s2t-admin-rights">
            <li>može napravit usera adminom</li>
            <label htmlFor="password">User is admin</label>
            <input type="checkbox" onChange={checkboxClick} />
            <div className="s2t-success-message">
              Success message placeholder
            </div>
          </div>
          <div className="s2t-delete-user">
            <li>brisat usera po usernameu</li>
            <button>Delete this user</button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default ShowUser;

