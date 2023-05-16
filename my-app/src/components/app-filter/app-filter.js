import './app-filter.css';

const Filter = ({filter, setFilter}) => {

    const buttonsData = [
        {name: 'all', label: "All Employees"},
        {name: 'increase', label: 'For Bonusses'},
        {name: "MoreThan1000", label: "Salary more than 1000$"}
    ]

    const buttons = buttonsData.map(({name, label})=> {
        const active = filter === name;
        const clazz = active ? 'active' : '';
        return(
                <button className={`${clazz}`} key={name} onClick={()=>setFilter(name)}>{label}</button>
        )})


        return(
            <div className="filter-container">
                {buttons}
            </div>
        )
}

export default Filter;