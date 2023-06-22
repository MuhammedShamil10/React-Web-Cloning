import React from 'react'
import Customer from './Customer';
import './InovatingAzure.css'

function InovatingAzure({click,value, val, forza, hrblock, nhs, nba, fujisu}) {

  return (
<div className='customerAll-container'>
        <div className='customer-section'>
            <div className='customer-azure'>
                    {value.map((item, index) =>(
                <a onClick={() => click(item.value)} key={index} >
                        <span>
                            <img src={item.img}/>
                        </span>
                </a>
                    ))}   
            </div>
        </div>
        <div className='customer-azure-service'>
            <div className='service-detial-column'>
                    <section>
                          {val === "forza" && 

                            forza.map((item) => {
                              return(
                                <Customer 
                                image={item.img}
                                content={item.text}
                                link={item.textElaburate}
                                key={item.img}
                                />
                              );
                            })}

                            {val === "nba" && 
                            nba.map((item) => {
                              return(
                                <Customer 
                                image={item.img}
                                content={item.text}
                                link={item.textElaburate}
                                key={item.img}
                                />
                              );
                            })}

                            {val === "h&r" && 
                            hrblock.map((item) => {
                              return(
                                <Customer 
                                image={item.img}
                                content={item.text}
                                link={item.textElaburate}
                                key={item.img}
                                />
                              );
                            })}

                            {val === "nhs" && 
                            nhs.map((item) => {
                              return(
                                <Customer 
                                image={item.img}
                                content={item.text}
                                link={item.textElaburate}
                                key={item.img}
                                />
                              );
                            })}

                            {val === "fujitsu" && 
                            fujisu.map((item) => {
                              return(
                                <Customer 
                                image={item.img}
                                content={item.text}
                                link={item.textElaburate}
                                key={item.img}
                                />
                              );
                            })}

                        </section>
                    </div>
            </div>
        </div>
  )
}

export default InovatingAzure