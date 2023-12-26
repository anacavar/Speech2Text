import DataList from '../DataList/DataList';
import './ListTemplate.scss';

const ListTemplate = ({ content }) => {
  return (
    <div className="s2t-list-template">
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <input
        className="s2t-search"
        type="text"
        placeholder="Type to search..."
      />
      {content.list}
    </div>
  );
};

export default ListTemplate;

