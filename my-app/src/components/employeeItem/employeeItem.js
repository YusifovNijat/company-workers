import './employeeItem.css';


const EmployeeItem = ({name, salary, increase, onDelete, onToggleProp}) => {

    let className = '';

    if(increase){
        className += 'increase';
    }



    return(

            <li className={className}>
                <span>{name}</span>
                <input type="text" value={salary + "$"} className={className}/>
                <button className='on-bonus' onClick={onToggleProp} name="increase" >
                    <i className="fa-solid fa-cookie"></i>
                </button>
                <button className="delete-button" onClick={onDelete}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>
    )
}

export default EmployeeItem;