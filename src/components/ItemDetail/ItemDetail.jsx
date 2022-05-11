import React from 'react'

export default function ItemDetail({item}){
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.price}</h2>
      <h3>{item.detail}</h3>
    </div>
  )
}
