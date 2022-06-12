import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, getDoc, doc} from "firebase/firestore" 

export default function ItemDetailContainer({itemId}){

    const [product, setProduct] = React.useState([]);
    
    React.useEffect(() => {
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

