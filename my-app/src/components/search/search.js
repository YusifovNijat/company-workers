import './search.css';

const Search = ({term, setTerm}) => {

    return(
            <input 
                className="search-input"
                type="text" 
                placeholder="Find employees"
                value={term}
                onChange={(e)=>setTerm(e.target.value)}
            
            />
    )
}

export default Search;