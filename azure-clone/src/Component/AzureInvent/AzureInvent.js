import { useEffect, useState } from "react";
import "./AzureInvent.css"
// function AzureGetStart() {

function AzureInvent() {
  const [data, setData] = useState(0);
  const fetchingData = () => {
    fetch(
      "https://raw.githubusercontent.com/MuhammedShamil10/React-Web-Cloning/main/azure-clone/public/azureData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.headerTop);
      });
  };
  useEffect(() => {
    fetchingData();
  }, []);
  // }
  console.log(data);

  return (
    <>
      <div className="Azure-getStart">
        
      </div>
    </>
  );
}

export default AzureInvent;
