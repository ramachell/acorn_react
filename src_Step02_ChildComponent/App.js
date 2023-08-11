// import logo from './logo.svg';
import './App.css';
import Child from './components/ChildComponents';
import Contact from './components/ContactComponent'
import ContactList from './components/CotactListComponent'

function App() {
  return (
    <div className="container">
      <h1>index page</h1>
      {ContactList}
    </div>
  );
}

export default App;
