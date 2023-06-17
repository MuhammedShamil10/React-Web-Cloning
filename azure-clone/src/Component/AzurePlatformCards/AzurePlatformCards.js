import React, { useEffect, useState } from "react";
import "./AzurePlatformCards.css";

function AzurePlatformCards() {
  const [data, setData] = useState(0);
  const fetchingData = () => {
    fetch(
      "https://raw.githubusercontent.com/MuhammedShamil10/React-Web-Cloning/main/azure-clone/public/azureData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.headBoxs);
      });
  };

  useEffect(() => {
    fetchingData();
  }, []);

  // console.log(data);

  return (
    <div className="azureContentCard-container">
       <div className="azureContentCard">
            <section>
                <div className="firstCard-joinMS">
                    <div className="firstCard-row">
                        <div className="firstCard-colmn">
                            
                        </div>
                    </div>
                </div>
            </section>
       </div> 
    </div>
  );
}

export default AzurePlatformCards;
