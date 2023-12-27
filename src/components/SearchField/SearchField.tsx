import './SearchField.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchField = ({ handleSearch }) => {
  return (
    <div className="s2t-search-field">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className="s2t-search"
        type="text"
        placeholder="Type to search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchField;

