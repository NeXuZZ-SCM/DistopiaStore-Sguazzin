import React from 'react'
import { products } from "../Data/productos";
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(){

    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        const apiPromise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(products);
            }, 2000)
        })


        apiPromise.then((result) => {
            setProduct(result[0]);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])



  return (
    <ItemDetail item={product}/>
  )
}

