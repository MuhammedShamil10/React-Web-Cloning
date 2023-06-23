import React from 'react'

function AzureServices({image, content, link}) {
  return (
    <div className='featured-card-container'>
    <div className='featured-all-card'>
      <div className='image-card'>
      <img src={image}/>
      </div>
      <p>{content}</p>
      <a href='/'>{link}</a>
    </div>
    </div>
  )
}

export default AzureServices