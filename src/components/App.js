import logo from '../logo.svg';
import Hader from './Header';
import './App.css';
import data from './db.json';
import Nav from './Nav';
import People from './People';


function App(props) {
  return (
    <div className="App">
     <Hader/>
     <Nav navigation = {props.navigation}/>
     <People db={data.people}/>
    </div>
  );
}

export default App;
