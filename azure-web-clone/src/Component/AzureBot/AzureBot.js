import React from 'react'
import './AzureBot.css'

import playBtn from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/playbutton.png"

function AzureBot({value}) {
  return (
    <div className='azure-boat-container'>
        <section>
            <div className='boat-image'>
                <img src={value.img} alt='' width='100%'/>
                {/* {console.log("sssssss",boat.item)} */}
            </div>
            <div className='boat-section'>
            <div className='boat-content'>
                <div className='boat-column'>
                    <div className='boat-row'>
                        <h2>{value.text}</h2>
                    </div>
                    <div className=' link-group '>
                        <a className='link-text'>
                            <img src={playBtn} alt='' />
                        <span>Watch the story (2:56)</span>
                        </a>
                        <span className='join-link'>{value.textLink}</span>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default AzureBot