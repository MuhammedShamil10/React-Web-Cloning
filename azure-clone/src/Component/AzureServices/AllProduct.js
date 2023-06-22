import React, { useEffect, useState } from 'react'
import AzureServices from './AzureServices'
import './Allproduct.css'


function AllProduct({item,feat,feature,ai,compute,container,hybrid, iot, click}) {


  return (
    <div className='product-container'>
<div className='productAndServices-container'>
        <div className='products-list-section'>
            <div className='product-list-items'>
                    {item.map((item, index) =>(
                <a onClick={() => click(item.value)} key={item.value} >
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