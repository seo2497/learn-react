import React from 'react'

function Card({imgUrl, itemName}) {
  return (
    <div className='card'>
      <img src={imgUrl}  alt={itemName}
      />
      <p>{itemName}</p>
    </div>
  )
}

export default Card
