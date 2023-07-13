import SearchPanel from '../searchPanel/searchPanel';
import EmployeesList from '../employees-list/employees-list';
import AddEmployee from '../addEmployee/addEmployee';
import AppInfo from '../app-info/app-info';
import { Context } from '../context/context';

import { useState } from 'react';


import './app.css';

function App() {

  const [lists, setLists] = useState([
    {
      id: 1,
      name: 'Nijat Yusifov',
      salary: 3000,
      increase: false
    },
    {
      id: 2,
      name: 'Ayxan Elxanli',
      salary: 2000,
      increase: false
    }
  ]);

  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  let employees = lists.length;
  let increased = lists.filter(list => list.increase).length;



  //***FUNCTIONS***

  const onDelete = (id) => {
    setLists(lists.filter(list => list.id !== id))
  }

  const onAdd = (name, salary, increase) => {
    if((name.length) > 1 && (!/[^a-z]*" "/i.test(name)) && (salary.length > 0) && /^\d/.test(salary)){
      const newEmployee = {
        id: ++employees,
        name,
        salary,
        increase,
      }
      setLists([...lists, newEmployee]);
    } 
    else {
      alert('-Please check if your name includes only letters and more than 1 letter as well as salary includes only numbers')
    }
  }

  const onSearch = (lists, term) => {
    if(term.length === 0){
      return lists;
    }

    return lists.filter(list => {
      return list.name.indexOf(term) > -1;
    })
  }

  const onFilter = (lists, filter) => {
    switch(filter) {
      case 'increase':
        return lists.filter(list=>list.increase);
      case 'MoreThan1000':
        return lists.filter(list=> list.salary > 1000);
      default:
        return lists;
    }
  }

  const onToggleProp = (id, prop) => {
    setLists(lists.map(list => {
      if(list.id === id){
        return {...list, [prop] : !list[prop]}
      }
      return list;
    }))
}

  const visibleData = onFilter(onSearch(lists, term), filter);

  return (
    <Context.Provider value = {{
      onAdd
    }}>
      <AppInfo employees={employees} increased={increased}/>
      <SearchPanel term={term} setTerm={setTerm} filter={filter} setFilter={setFilter}/>
      <EmployeesList lists={visibleData} onDelete={onDelete} onToggleProp={onToggleProp}/>    
      <AddEmployee/>
    </Context.Provider>
  );
}

export default App;
