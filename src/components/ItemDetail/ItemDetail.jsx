import React from 'react'
import Image from 'react-bootstrap/Image'

export default function ItemDetail({item}){


  const divContenedor = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
};
  const divDetail = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <>
    <div style={divContenedor}>
      <div>
        <Image src={`../${item.image}`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h3>${item.price}</h3>
      </div>
    </div>
    <div style={divDetail}>{item.detail}</div>
    </>
  )
}
