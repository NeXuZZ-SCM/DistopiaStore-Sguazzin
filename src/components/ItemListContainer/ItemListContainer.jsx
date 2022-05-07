import React from 'react'
import ItemList from "../ItemList/ItemList";
import { products } from "../Data/productos";
import { Spinner } from 'react-bootstrap';

export default function ItemListContainer ({greeting}){

    const [animation, setAnimation] = React.useState("grow");

    const [productsList, setProductsList] = React.useState([]);

    const spinnerCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    React.useEffect(() => {
        const apiPromise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(products);
            }, 2000)
        })


        apiPromise.then((result) => {
            setAnimation("disabled");
            setProductsList(result);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <>
            {greeting}
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