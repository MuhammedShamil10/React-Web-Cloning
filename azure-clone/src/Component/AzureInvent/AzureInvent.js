import { useEffect, useState } from "react";
import "./AzureInvent.css";
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

  console.log(data);

  return (
    <>
      <main>
        <div className="azureGetStart-container">
          <div className="Azure-getStart">
            <div className="backgroundImg-azureInvent">
              <img src={data.img} width="100%"/>
            </div>
            <div className="Azure-getStart-content">
              <div className="azr-getStart">
                <div className="azr-getStart-box">
                  <h1 className="baseText">
                    {data.baseHeading}
                  </h1>
                  <div className="azureExplore">
                    <h1>Learn, connect, and explore</h1>
                    <p>
                      Envision and create intelligent apps with the latest technologies announced at Microsoft Build. Get started now with pay-as-you-go pricing. There’s no upfront commitment—cancel anytime. Or try Azure free for up to 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AzureInvent;
