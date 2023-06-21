import React from 'react'

function AzureServices({image, content, link}) {
  return (
    <div className='featured-all-card'>
      <img src={image}/>
      <p>{content}</p>
      <a href='/'>{link}</a>
    </div>
  )
}

export default AzureServices