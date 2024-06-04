// Import data

// Import components
import Sidebar from './Sidebar'
import Searchbar from './Searchbar';
import Directory from './Directory';
import Gallery from './Gallery'
import Posting from './Posting';
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
        <Posting />
      </div>
    </div>
  );
}

export default App;
