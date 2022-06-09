import React from 'react'
import { CartContext } from "../../components/CartCustomProvider/CartCustomProvider"
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';



export default function Cart(){

  const navigate = useNavigate();



  const { carrito, totalPrice, removeItem } = React.useContext(CartContext);
  const countItem = carrito.length;




  return (
    <>
      <div>Cart</div>
      <div className='container'>
              <div className="row">
                  {countItem === 0 ? 
                    <div><Button variant="warning" onClick={() => navigate(`/`)}>Volver</Button></div>
                  : 
                    [
                    carrito.map((product) => {
                      return(
                        <>
                          <li>{product.title} {product.detail}</li>
                          <Button variant="warning" onClick={ () => removeItem(product.id)}>Eliminar</Button>
                        </>
                      )
                    }),
                    <div>{totalPrice}</div>
                    ]//Matriz usada para retornar varias lineas.
                  }
              </div>
              <Button variant="warning"  onClick={() => navigate(`/checkout`)}>FINALIZAR COMPRA</Button>
      </div>
    </>
  )
}

