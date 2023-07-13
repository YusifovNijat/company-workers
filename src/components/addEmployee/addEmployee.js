import './addEmployee.css';

import {useState, useContext} from 'react';

import { Context } from '../context/context';

const AddEmployee = () => {

    const {onAdd} = useContext(Context);

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        salary: '',
        increase: false,
    });

    const onInputChange = (e) =>{ 
        setNewEmployee({...newEmployee, [e.target.name] : e.target.value})
        
    }

    const {name, salary, increase} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(name, salary, increase);
        setNewEmployee({name: '',
        salary: ''});
    }


    return(
        <div className="add-container">
            <h2>Add new employee</h2>
            <form
                onSubmit={handleSubmit}
            >
                <input 
                    className="add-input" 
                    type="text" 
                    name="name"
                    value={name}
                    placeholder="What is the name?"
                    onChange={(e)=>onInputChange(e)}
                    />
                <input 
                    className="add-input"
                    type="text"
                    name="salary"
                    value={salary}
                    placeholder="Salary in $?"
                    onChange={(e)=>onInputChange(e)}
                    />
                <button className="add-button">Add</button>
            </form>
        </div>
        )
}

export default AddEmployee;