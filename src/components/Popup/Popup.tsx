import { useState } from 'react';
import './Popup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Popup = ({ buttonLabel, tabs }) => {
  console.log('here', tabs);
  const [isFormVisible, setFormVisible] = useState(false);

  const togglePopup = () => {
    setFormVisible(!isFormVisible);
  };

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="s2t-popup-item">
      <button className="s2t-popup-button" onClick={togglePopup}>
        <FontAwesomeIcon icon={faPlus} /> {buttonLabel}
      </button>

      {isFormVisible && (
        <div className="s2t-popup">
          <div className="s2t-popup-background" onClick={togglePopup} />
          <div className="s2t-tabs-template">
            <div className="s2t-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={activeTab === tab.id ? 'active' : ''}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="s2t-tab-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  style={{ display: activeTab === tab.id ? 'block' : 'none' }}
                >
                  <h2>{tab.label} Content</h2>
                  <p>{tab.content}</p>
                  {tab.form}
                </div>
              ))}
            </div>
            <div className="s2t-popup-buttons">
              <button onClick={togglePopup}>Cancel</button>
              <button onClick={togglePopup}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;

