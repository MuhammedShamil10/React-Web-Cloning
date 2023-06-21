import './App.css';
import Header from './Component/Header/Header';
import AzureInvent from './Component/AzureInvent/AzureInvent';
import AzurePlatformCards from './Component/AzurePlatformCards/AzurePlatformCards';
import AzureServices from './Component/AzureServices/AzureServices';
import AllProduct from './Component/AzureServices/AllProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <AzureInvent />
      <AzurePlatformCards />
      {/* <AzureServices /> */}
      <AllProduct />
    </div>
  );
}

export default App;
