import './App.css';
import Header from './Component/Header/Header';
import AzureInvent from './Component/AzureInvent/AzureInvent';
import AzurePlatformCards from './Component/AzurePlatformCards/AzurePlatformCards';

function App() {
  return (
    <div className="App">
      <Header />
      <AzureInvent />
      <AzurePlatformCards />
    </div>
  );
}

export default App;
