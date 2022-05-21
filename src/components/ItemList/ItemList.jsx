import React from 'react'
import Item from '../Item/Item'

export default function ItemList({ items }){
  return (
        <div className='container'>
            <div className="row">
                {items.map((product) => {
                    return(
                        <Item item={product} key={product.id}/>
                    )
                })}
            </div>
        </div>
  )
}