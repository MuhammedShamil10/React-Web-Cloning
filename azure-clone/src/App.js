import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import AzureInvent from './Component/AzureInvent/AzureInvent';
import AzurePlatformCards from './Component/AzurePlatformCards/AzurePlatformCards';
import AzureServices from './Component/AzureServices/AzureServices';
import AllProduct from './Component/AzureServices/AllProduct';
import InovatingAzure from './Component/InovatingAzure/InovatingAzure';
import AzureMigration from './Component/AzureMigration/AzureMigration';
import DiscoverAzure from './Component/DiscoverAzure/DiscoverAzure';
import AzureBot from './Component/AzureBot/AzureBot';

function App() {

  const [data, setData] = useState([]);
  const[item, setItem] =useState([]);
  const[feat, setFeat] =useState("featured");
  const[feature, setFeature] =useState([]);
  const[ai, setAi] =useState([]);
  const[compute, setCompute] =useState([]);
  const[container, setContainer] =useState([]);
  const[hybrid, setHybrid] =useState([]);
  const[iot, setiot] =useState([]);
  const [headerTop, setHeaderTop] = useState([]);

  const [value,setValue]=useState([]);
  const[val, setVal] =useState("forza");
  const[forza, setForza] =useState([]);
  const[nba, setNba] =useState([]);
  const[hrBlock, sethrBlock] =useState([]);
  const[nhs, setNhs] =useState([]);
  const[fujisu, setFujisu] =useState([]);

  const[migration, setMigration] =useState([]);
  const[heading, setHeading] =useState([]);

  const[discover, setDiscover] =useState([])

  const[boat, setBoat] =useState([])

  const[build, setBuild] =useState([])

  const fetchingData = () => {
    fetch(
      "https://raw.githubusercontent.com/MuhammedShamil10/React-Web-Cloning/main/azure-clone/public/azureData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.headBoxs);
        setHeaderTop(data.headerTop);
        setItem(data.productServices);
        setFeature(data.featuredCards);
        setAi(data.aimsLCards);
        setCompute(data.compute);
        setContainer(data.containers);
        setHybrid(data.hybridmulti);
        setiot(data.Iot);

        setValue(data.customersInnovating);
        setForza(data.forzaGame);
        setNba(data.nbaSports);
        sethrBlock(data.hrBlock);
        setNhs(data.nhsMedic);
        setFujisu(data.fujisuCloud);

        setMigration(data.migrationAzure);
        setHeading(data.migrationAzure);

        setDiscover(data.discover);

        setBoat(data.engineerPassion);

        setBuild(data.footerCards);
        
      });
  };

  useEffect(() => {
    fetchingData();
  }, []);

  let handleClick = (item) => {
    setFeat(item);
  };

  let inovatingClick = (item) => {
    setVal(item);
  };


  return (
    <div className="App">
      <Header />
      <AzureInvent headertop={headerTop}/>
      <AzurePlatformCards data={data}/>
      <AllProduct item={item} feat={feat} feature={feature} 
                  ai={ai} compute={compute} container={container}
                  hybrid={hybrid} iot={iot} click={handleClick}
      />
      <InovatingAzure  value={value} click={inovatingClick} val={val} forza={forza} nba={nba}
                       hrblock={hrBlock} nhs={nhs} fujisu={fujisu}
      />
      <AzureMigration  value={migration} textValue={heading}/>
      <DiscoverAzure value={discover} />
      <AzureBot value={boat}/>
    </div>
  );
}

export default App;
