import Search from "../search/search"
import Filter from "../app-filter/app-filter";

import './searchPanel.css';

const SearchPanel = ({term, setTerm, filter, setFilter}) => {
    return(
        <div className="search-container">
            <Search term={term} setTerm={setTerm}/>
            <Filter filter={filter} setFilter={setFilter}/>
        </div>
    )
}

export default SearchPanel;