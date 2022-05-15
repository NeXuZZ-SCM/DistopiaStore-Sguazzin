import React from 'react'
import Item from '../Item/Item'

export default function ItemList({ items}){
  return (
        <div className='container'>
            <div class="row">
                {items.map((product) => {
                    return(
                        <Item item={product} />
                    )
                })}
            </div>
        </div>
  )
}