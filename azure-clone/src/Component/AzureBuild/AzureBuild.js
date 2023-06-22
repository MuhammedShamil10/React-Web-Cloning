import React from 'react'
import './AzureBuild.css'


function AzureBuild({value}) {
  return (
    <div className='azure-build-container'>
        <div className='azure-build-section'>
            <section>
                <div className='box-column'>
                    <div className='build-image'>
                        <img src={value.img} alt='' />
                    </div>
                    <div className='build-content'>
                        <h2>
                            
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default AzureBuild