import React, {useEffect, useState} from 'react'
import './AzureServices.css'

function AzureServices() {

    const [data, setData] = useState([]);
    const fetchingData = () => {
      fetch(
        "https://raw.githubusercontent.com/MuhammedShamil10/React-Web-Cloning/main/azure-clone/public/azureData.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((item) => {
          setData(item.productServices);
        });
    };
    useEffect(() => {
      fetchingData();
    }, []);

  return (
    <div className='productAndServices-container'>
        <div className='products-list-section'>
            <div className='product-list-items'>
                    {data.map((item, index) =>(
                <a href='/'>
                        <span key={index}>
                            {item.name}
                        </span>
                </a>
                    ))}
                    
            </div>
        </div>
    </div>
  )
}

export default AzureServices