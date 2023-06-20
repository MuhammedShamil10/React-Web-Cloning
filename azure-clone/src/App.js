import './App.css';
import Header from './Component/Header/Header';
import AzureInvent from './Component/AzureInvent/AzureInvent';
import AzurePlatformCards from './Component/AzurePlatformCards/AzurePlatformCards';
import AzureServices from './Component/AzureServices/AzureServices';

function App() {
  return (
    <div className="App">
      <Header />
      <AzureInvent />
      <AzurePlatformCards />
      <AzureServices />
    </div>
  );
}

export default App;
