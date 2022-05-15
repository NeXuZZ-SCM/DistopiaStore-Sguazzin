import React from 'react'
import { products } from "../Data/productos";
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer({itemId}){

    const [product, setProduct] = React.useState([]);
    
    React.useEffect(() => {
        setProduct(products.find(x => x.id === itemId));
    }, [itemId])



  return (
    <ItemDetail item={product}/>
  )
}

