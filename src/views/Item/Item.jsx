import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

export default function Item(){

    const {itemId} = useParams();
    
  return (
     <>
    <div>Item</div>
    <ItemDetailContainer itemId={+itemId} />
    </>
  )
}
