import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { addDoc, collection, getFirestore } from 'firebase/firestore'; 
import { CartContext } from "../../components/CartCustomProvider/CartCustomProvider"


export default function Checkout(){

    const [data, setData] = React.useState();
    const [orderId, setOrderId] = React.useState();
    const { carrito, totalPrice} = React.useContext(CartContext);
    console.log(orderId);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setData({...data, [name]: value});

        console.log(data);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        await addDoc(orderCollection, order).then(
            ({id}) => {
                setOrderId(id);
                alert(id);
            }
        );
    }

    const order = {
        buyer: data,
        items: carrito.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.quantity
            }
          }),
        date: new Date(),
        total: totalPrice
    }




  return ( 
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre" name="name" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Ingresar telefono" name="phone" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar email" name="email" onChange={handleChange} />
                <Form.Text className="text-muted">
                Nunca compartiremos tu correo electrónico con nadie más.
                </Form.Text>
            </Form.Group>



            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
  )
}