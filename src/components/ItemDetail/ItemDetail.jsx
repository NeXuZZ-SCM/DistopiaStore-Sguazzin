//#region imports
import React, { useContext } from 'react'
import { CartContext } from '../CartCustomProvider/CartCustomProvider';
import Image from 'react-bootstrap/Image'
import ItemCount from "../ItemCount/ItemCount";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
//#endregion 


export default function ItemDetail({item}){

  const [countItem, setCountItem] = React.useState(1);
  const [action, setAction] = React.useState("comprar");
  const navigate = useNavigate();

  const {addToCart} = useContext(CartContext);


  //#region estilos
  const divContenedor = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  };
  const divDetail = {
    display: 'flex',
    justifyContent: 'center'
  };
  const Carrito = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
  //#endregion

//   const onAddCount = (messege, {count}) => {
//     setCountItem({countItem} + {count});
//     setAction("carrito");
//     showToastMessage(messege, {count});
// };
  const onAddCart = (messege, {count}) => {
    setCountItem({countItem} + {count});
    setAction("carrito");
    showToastMessage(messege, {count});
    addToCart(item, count);
};


  //#region Alert TOAST
  const showToastMessage = (messege, {count}) => {
    toast(` ${messege} ${count} al carrito`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  //#endregion
/* -------------------------------------------------------------------------- */
/*                                 Condicional                                */
/* -------------------------------------------------------------------------- */
const AddToCart = () => {
  return <ItemCount stock={item.stock} initial={1} onAdd={onAddCart}/> //onAddCart  onAdd={() => addToCart(item)}
}
const GoToCart = () => {
  return <div style={Carrito}><Button variant="warning" onClick={() => navigate(`/cart`)}>Terminar mi compra</Button></div>
}

const ConditionalButton = action === "comprar" ? AddToCart : GoToCart


  return (
    <>
    <div style={divContenedor}>
      <div>
        <Image src={`../${item.image}`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h3>${item.price}</h3>
      </div>
    </div>
    <div style={divDetail}>{item.detail}</div>
    <ConditionalButton></ConditionalButton>
    </>
  )
}
