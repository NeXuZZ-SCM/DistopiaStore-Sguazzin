import React from 'react'
import ItemList from "../ItemList/ItemList";
//import { products } from "../Data/productos"; // traigo de productos LOCALHOST hardcoding database
import { Spinner } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

import { getFirestore, getDoc, doc, collection, getDocs, query, where } from "firebase/firestore" // importando fireStore


export default function ItemListContainer ({greeting, categoryId}){

    const [greetingMod, setgreetingMod] = React.useState(greeting);

    const [animation, setAnimation] = React.useState("grow");

    const [productsList, setProductsList] = React.useState([]);

    const spinnerCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    //#region Viejo USEEFFECT
    // React.useEffect(() => {
    //     const apiPromise = new Promise((resolve, reject) => {
    //         setTimeout(()=> {
    //             resolve(products);
    //         }, 1000)
    //     })

    //     apiPromise.then((result) => {
    //         setAnimation("disabled");
    //         if(categoryId){
    //             switch(categoryId) {
    //                 case 1:
    //                      setgreetingMod('Seguridad');
    //                      break;
    //                 case 2:
    //                      setgreetingMod('Entretenimiento');
    //                      break;
    //                 case 3:
    //                      setgreetingMod('Outfit');
    //                      break;
    //                 default:
    //                      setgreetingMod('Aún sin categorizar');
    //                      break;
    //               }
    //             setProductsList(result.filter(item => item.category === categoryId));
               
    //         }else{
    //             setgreetingMod('Todos nuestros productos');
    //             setProductsList(result);
    //         }
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }, [categoryId])
    //#endregion Viejo USEEFFECT
    
    React.useEffect(() => {
        const db = getFirestore();
        setAnimation("grow");
        setTimeout(()=> {

            if (categoryId) {
                const q = query(collection(db, "productos"), where("category", "==", categoryId));
                getDocs(q).then((snapshot) => {
                        const data = snapshot.docs.map(doc => ({id : doc.id, ...doc.data()}))
                        setProductsList(data);
                        console.log(data);
                })
            }else{
                const productsRef = collection(db, "productos");
                getDocs(productsRef).then(snapshot => {
                    const data = snapshot.docs.map(doc => ({id : doc.id, ...doc.data()}))
                    setProductsList(data);
                })
            }

            setAnimation("disabled");
        }, 1000)
        
    }, [categoryId])





    return (
        <>
            <Alert variant='secondary'>{greetingMod}</Alert>
            <br/>
            <div className="spinner" style={spinnerCenter}>
                <Spinner animation={animation} role="status" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <ItemList items={productsList} />
        </>
    )
}