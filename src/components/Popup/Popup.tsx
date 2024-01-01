import { useState } from 'react';
import './Popup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Popup = ({ buttonLabel, popupContent }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const togglePopup = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button onClick={togglePopup}>
        <FontAwesomeIcon icon={faPlus} /> {buttonLabel}
      </button>

      {isFormVisible && (
        <div className="s2t-popup">
          <div className="s2t-popup-content">
            <h2>{popupContent.title}</h2>
            <p>{popupContent.text}</p>
            {popupContent.form}
            <button onClick={togglePopup}>Cancel</button>
            <button onClick={togglePopup}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;

