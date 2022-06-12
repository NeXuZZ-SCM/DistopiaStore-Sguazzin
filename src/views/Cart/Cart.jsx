import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
import {Card, Row, Col, Badge, Alert,  Button } from 'react-bootstrap';


export default function Cart(){

  const navigate = useNavigate();
  const { carrito, totalPrice, removeItem, removeAll } = React.useContext(CartContext);
  const countItem = carrito.length;
  return (
    <>
        <Alert variant='secondary'>Carrito</Alert>
                  {countItem === 0 ?
                    <>
                      <Alert variant="warning">
                      <Alert.Heading>Quieres comprar algo?!</Alert.Heading>
                      <p>
                        Has llegado hasta aquí sin agregar ningún producto al carrito.
                        No podrás seguir con tu compra a menos que agregues algunos productos.<br/>
                        <Alert.Link onClick={() => navigate(`/`)}>Regresa a la tienda </Alert.Link> y busca algo que sea de tu agrado.
                      </p>
                      <hr />
                      <div className="d-flex justify-content-end">
                        <Button onClick={() => navigate(`/`)} variant="warning">
                          Cerrarme e ir a ver mas productos!
                        </Button>
                      </div>
                    </Alert>
                    <div style={{height:'40vh'}}/>
                    </>
                  : 
                  [
                    <>
                    <div className='container'>
                      <Row xs={1} md={1} className="g-4">
                        {carrito.map((product) => {
                          return(
                              <Col key={product.id}>
                                <Card>
                                  <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                    <Badge bg="primary" pill style={{ padding: '12px', width: '43px', fontSize: '18px'}}>
                                      {product.quantity}
                                    </Badge>
                                  </div>
                                  <div style={{marginTop: '-40px', display: 'flex'}}>
                                  <Card.Img variant="top" src={product.image} style={{ width: '100px'}}/>
                                  <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                      {product.detail}
                                    </Card.Text>
                                  </Card.Body>
                                  </div>
                                  <Button variant="warning" onClick={ () => removeItem(product.id)}>Eliminar</Button>
                                </Card>
                              </Col>
                          )
                          })}
                      </Row>
                      <div style={{ display: 'flex', justifyContent: 'flex-end'}}><h2><b>${totalPrice}</b></h2></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                      <Button variant="outline-warning"  onClick={ () => removeAll()}>Vaciar carrito</Button>
                      <Button variant="warning"  onClick={() => navigate(`/checkout`)}>Finalizar compra</Button>
                      </div>
                      </div>
                      <div style={{height:'40vh'}}/>
                    </>
                    ]//Matriz usada para retornar varias lineas.
                  }
    </>
  )
}

