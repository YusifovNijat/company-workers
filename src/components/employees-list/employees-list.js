import EmployeeItem from "../employeeItem/employeeItem";

const EmployeesList = ({lists, onDelete, onToggleProp}) => {


    const elements = lists.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeeItem key={id} {...itemProps} onDelete={(()=>onDelete(id))} onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('name'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;