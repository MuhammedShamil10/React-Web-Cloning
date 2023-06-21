import React, { useEffect, useState } from 'react'
import AzureServices from './AzureServices'
import './Allproduct.css'


function AllProduct() {

  const[data, setData] =useState([])
  const[feat, setFeat] =useState("featured")
  const[feature, setFeature] =useState([])
  const[ai, setAi] =useState([])
  const[compute, setCompute] =useState([])
  const[container, setContainer] =useState([])
  const[hybrid, setHybrid] =useState([])
  const[iot, setiot] =useState([])
  
  const fetchingData = () => {
    fetch(
      "https://raw.githubusercontent.com/MuhammedShamil10/React-Web-Cloning/main/azure-clone/public/azureData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.productServices);
        setFeature(data.featuredCards)
        setAi(data.aimsLCards)
        setCompute(data.compute)
        setContainer(data.containers)
        setHybrid(data.hybridmulti)
        setiot(data.Iot)
      });
  };
  useEffect(() => {
    fetchingData();
  }, []);
  
  let handleClick = (item) => {
    setFeat(item)
  };

  return (
<div className='productAndServices-container'>
        <div className='products-list-section'>
            <div className='product-list-items'>
                    {data.map((item, index) =>(
                <a onClick={() => handleClick(item.value)} key={item.value} >
                        <span key={index}>
                            {item.name}
                        </span>
                </a>
                    ))}   
            </div>
        </div>
        <div className='product-detials'>
            <div className='product-detial-column'>
                    <div className='products-boxes-section'>
                    <section>
                          {feat === "featured" && 
                            feature.map((item) => {
                              return(
                                <AzureServices 
                                image={item.img}
                                content={item.text}
                                link={item.textLink}
                                key={item.img}
                                />
                              );
                            })}
                            {feat === "AIML" && 
                            ai.map((item) => {
                              {console.log(item)}
                              return(
                             <AzureServices 
                             image={item.img}
                             content={item.text}
                             link={item.textLink}
                             key={item.img}
                             />
                              );
                            })}
                            {feat === "compute" && 
                            compute.map((item) => {
                              return(
                                <AzureServices 
                                image={item.img}
                                content={item.text}
                                link={item.textLink}
                                key={item.img}
                                />
                              );
                            })}

                            {feat === "containers" && 
                            container.map((item) => {
                              return(
                                <AzureServices 
                                image={item.img}
                                content={item.text}
                                link={item.textLink}
                                key={item.img}
                                />
                              );
                            })}
                            {feat === "hybrid multicloud" && 

                              hybrid.map((item) => {
                              {console.log(item)}
                              return(
                                <AzureServices 
                                image={item.img}
                                content={item.text}
                                link={item.textLink}
                                key={item.img}
                                />
                              );
                            })}
                            {feat === "iot" && 
                            iot.map((item) => {
                              return(
                                <AzureServices 
                                image={item.img}
                                content={item.text}
                                link={item.textLink}
                                key={item.img}
                                />
                              );
                            })}
                        </section>
                    </div>
            </div>
        </div>
        <a className='seeAll-product'>
          <span>
            See all products (200+)
          </span>
        </a>
        <h2 className='customerAzure'>
        Find out how these customers are innovating with Azure
        </h2>
    </div>
  )
}

export default AllProduct