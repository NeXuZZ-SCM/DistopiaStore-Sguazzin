import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import { Alert } from 'react-bootstrap';

export default function Item(){

    const {itemId} = useParams();
    
  return (
     <>
    <Alert variant='secondary'>Detalle de producto</Alert>
    <ItemDetailContainer itemId={itemId} />
    </>
  )
}
