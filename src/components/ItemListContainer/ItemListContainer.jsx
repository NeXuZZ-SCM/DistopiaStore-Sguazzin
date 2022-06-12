import React from 'react'
import ItemList from "../ItemList/ItemList";
import { Spinner } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore" 

export default function ItemListContainer ({categoryId}){

    const [greetingMod, setgreetingMod] = React.useState();

    const [animation, setAnimation] = React.useState("grow");

    const [productsList, setProductsList] = React.useState([]);

    const spinnerCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    
    React.useEffect(() => {
        const db = getFirestore();
        setAnimation("grow");
        setTimeout(()=> {
            if (categoryId) {
                const q = query(collection(db, "productos"), where("category", "==", categoryId));
                getDocs(q).then((snapshot) => {
                        const data = snapshot.docs.map(doc => ({id : doc.id, ...doc.data()}))
                        setProductsList(data);
                })
            }else{
                const productsRef = collection(db, "productos");
                getDocs(productsRef).then(snapshot => {
                    const data = snapshot.docs.map(doc => ({id : doc.id, ...doc.data()}))
                    setProductsList(data);
                })
            }

            setAlert(categoryId)
            setAnimation("disabled");
        }, 1000)
        
    }, [categoryId])

    const setAlert = (categoryId)=>{
        if (categoryId !== null) {
            switch (categoryId) {
                case 1:
                    setgreetingMod('Asistentes de Seguridad');
                    break;
                case 2:
                    setgreetingMod('Asistentes de Limpieza');
                    break;
                case 3:
                    setgreetingMod('Asistentes de Outfit');
                    break;
              default:
                    setgreetingMod('Todos nuestros productos');
            }
        }
    }
    return (
        <>
            <Alert variant='secondary'>{greetingMod}</Alert>
            <br/>
            <div className="spinner" style={spinnerCenter}>
                <Spinner animation={animation} role="status" >
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
            <ItemList items={productsList} />
        </>
    )
}