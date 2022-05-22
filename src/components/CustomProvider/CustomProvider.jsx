import React, { createContext } from "react";

const CartContext = createContext();

const Provider = CartContext.Provider;


const CartCustomProvider = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);
    console.log(carrito);
    //agrego items al carrito addItem(item, quantity)
    const addToCart = (item, quantity) =>{
        console.log(quantity);
        if(isInCart(item.id)){
            const newCart = carrito.map(cartItem => {
                if(cartItem.id === item.id){
                    cartItem.quantity += quantity;
                }
                return cartItem;
            })
            setCarrito(newCart);
        }else{
            setCarrito([...carrito, {...item, quantity: quantity}]);
        }
    }
    //elimino items del carrito removeItems(itemId)
    const removeItem= (itemId) =>{ //podria ser item y en !== item.id
        if(isInCart(itemId)){
            const newCart = carrito.map(cartItem => {
                if(cartItem.id === itemId){
                    if(cartItem.quantity <= 1){
                        carrito.filter((cartItem) => cartItem.id !== itemId);
                    }else{
                        cartItem.quantity--;
                    }
                }
                return cartItem;
            })
            setCarrito(newCart);
        }

        // const newCart = carrito.filter((cartItem) => cartItem.id !== itemId);
        // setCarrito(newCart);
    }
    //elimino todos los items deleteAll clear()
    const removeAll= () =>{
        setCarrito([]);
    }
    //verifico que exista el item isInCart:(id)
    const isInCart= (itemId) =>{
        return carrito.find(item=> item.id === itemId);
    }
    return (
        <Provider value={{
            addToCart,
            removeItem,
            removeAll,
            isInCart,

            carrito,
        }}>{children}</Provider>
    )
}

export {CartContext, CartCustomProvider}