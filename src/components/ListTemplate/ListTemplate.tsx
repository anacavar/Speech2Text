import Popup from '../Popup/Popup';
import SearchField from '../SearchField/SearchField';
import './ListTemplate.scss';

const ListTemplate = ({ content }) => {
  return (
    <div className="s2t-list-template">
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <div className="s2t-list-functionalities">
        <SearchField handleSearch={content.handleSearch} />
        <div>
          <Popup buttonLabel={content.buttonLabel} tabs={content.tabs} />
        </div>
      </div>
      {content.list}
    </div>
  );
};

export default ListTemplate;

