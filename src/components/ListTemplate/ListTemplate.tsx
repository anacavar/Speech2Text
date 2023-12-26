import Popup from '../Popup/Popup';
import './ListTemplate.scss';

const ListTemplate = ({ content }) => {
  return (
    <div className="s2t-list-template">
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <div className="s2t-list-functionalities">
        <input
          className="s2t-search"
          type="text"
          placeholder="Type to search..."
        />
        <Popup popupContent={content.popupContent} />
      </div>
      {content.list}
    </div>
  );
};

export default ListTemplate;

