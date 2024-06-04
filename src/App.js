// Import data

// Import components
import Sidebar from './sidebar'
import Searchbar from './searchbar';
import Directory from './directory';
import Gallery from './gallery'
import './App.css';

function App() {
  return (
    <div>
      <h1>CraigList</h1>
      <div className="App">
        <Sidebar />
        <Searchbar />
        <Directory />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
