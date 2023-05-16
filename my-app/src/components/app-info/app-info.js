import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return(
        <div className="header-container">
            <header>Employees in Company</header>
            <h2>Number of Employyees: {employees}</h2>
            <h2>Bonusses will get: {increased}</h2>
        </div>
    )
}

export default AppInfo;