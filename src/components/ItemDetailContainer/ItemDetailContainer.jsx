import React from 'react'
import { products } from "../Data/productos";
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, getDoc, doc} from "firebase/firestore" // importando fireStore




export default function ItemDetailContainer({itemId}){

    const [product, setProduct] = React.useState([]);
    
    React.useEffect(() => {
        //setProduct(products.find(x => x.id === itemId));
        //#region Traer solo un documento
        const db = getFirestore();

          const productsRef = doc(db, "productos", itemId);
          getDoc(productsRef).then(snapshot => {
              if (snapshot.exists()) {
                  setProduct({id : snapshot.id, ...snapshot.data()});
              }
          })


        //#endregion



    }, [itemId])



  return (
    <ItemDetail item={product}/>
  )
}

