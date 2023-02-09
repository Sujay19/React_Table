import './App.css';
import FilterComponent from './Components/FilterComponent';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import TableComp from './Components/TableComp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Project/>
      <FilterComponent/>
      <TableComp/>
    </div>
  );
}

export default App;
