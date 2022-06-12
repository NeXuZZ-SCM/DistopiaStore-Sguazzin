import React from 'react'
import { Form, Button, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'; 
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function Checkout(){

    const navigate = useNavigate();


  //#region Alert TOAST
  const showToastMessage = (messege) => {
    toast(messege, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        });
  };



 const copyToClipboard = () => {
    navigator.clipboard.writeText(orderId);
    showToastMessage("👌 Nº de orden copiado");
 }













    const [data, setData] = React.useState();
    const [orderId, setOrderId] = React.useState(0);
    const { carrito, totalPrice, removeAll} = React.useContext(CartContext);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setData({...data, [name]: value});
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        await addDoc(orderCollection, order).then(
            ({id}) => {
                setOrderId(id); 
                //alert(id);
            }
        );
        removeAll();

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

    const styleContainer= {
        display:'flex',
        justifyContent: 'center'
    }


  return ( 
    <>
    <div className='container' style={styleContainer}>
        {orderId === 0
            ?
            <>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Nombre: </b></Form.Label>
                        <Form.Control type="text" placeholder="Ingresar nombre" name="name" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Telefono: </b></Form.Label>
                        <Form.Control type="text" placeholder="Ingresar telefono" name="phone" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Email: </b></Form.Label>
                        <Form.Control type="email" placeholder="Ingresar email" name="email" onChange={handleChange} />
                        <Form.Text className="text-muted">
                        Nunca compartiremos tu correo electrónico con nadie más.
                        </Form.Text>
                    </Form.Group>



                    <Button variant="warning" type="submit">
                        Enviar
                    </Button>
                </Form>
                </>
            :
            <>
                <Card style={{ width: '46rem' }}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Card.Img variant="top" src="thuglife.png" style={{maxWidth: '30rem'}}/>
                    </div>
                    <Card.Body style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <Card.Title>Felicitaciones !!! 🎉</Card.Title>
                        <Card.Text>
                            <li style={{display: 'flex', justifyContent: 'center'}}>Finalizaste tu compra 🥳📦</li>
                            <li style={{display: 'flex', justifyContent: 'center'}}>En breve recibirás tus productos</li>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{display: 'flex', justifyContent: 'center'}}>Nombre:&nbsp;<b>{order.buyer.name}</b></ListGroupItem>
                        <ListGroupItem style={{display: 'flex', justifyContent: 'center'}}> Su nº de orden:&nbsp;<b>{orderId}</b></ListGroupItem>
                        <ListGroupItem style={{display: 'flex', justifyContent: 'center'}}>Hemos enviado un correo a:&nbsp;<b>{order.buyer.email}</b></ListGroupItem>
                    </ListGroup>
                    <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button  variant="outline-warning" onClick={() => navigate(`/`)}>Volver a la tienda</Button>
                        <Button  variant="warning" onClick={copyToClipboard}>Copiar nº de orden</Button>
                    </Card.Body>
                </Card>
            </>
        }
    </div>
    <div style={{height:'30vh'}}/>
    </>

  )
}