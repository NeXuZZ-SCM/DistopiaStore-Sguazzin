import React, { createContext } from "react";

const CartContext = createContext();
const Provider = CartContext.Provider;

const CartCustomProvider = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);
    //agrego items al carrito addItem(item, quantity)
    const addToCart = (item, quantity) =>{
        if(isInCart(item.id)){
            const newCart = carrito.map(cartItem => {
                if(cartItem.id === item.id){
                    cartItem.quantity += quantity;
                }
                
                return cartItem;
            })
            setCarrito(newCart);
            setTotalPrice(totalPrice + (item.price * quantity));
            setTotalItems(totalItems + quantity);
        }else{
            setCarrito([...carrito, {...item, quantity: quantity}]);
            setTotalPrice(totalPrice + (item.price * quantity));
            setTotalItems(totalItems + quantity);
        }
    }
    //elimino items del carrito removeItems(itemId)
    const removeItem= (itemId) =>{
        if(isInCart(itemId)){
            carrito.map(cartItem => {
                
                if(cartItem.id === itemId){
                    if(cartItem.quantity === 1){
                        const newList = carrito.filter((cartItem) => cartItem.id !== itemId);
                        setCarrito(newList);
                        setTotalPrice(totalPrice - cartItem.price);
                        setTotalItems(totalItems - 1);
                    }else{
                        cartItem.quantity--;
                        setTotalPrice(totalPrice - cartItem.price);
                        setTotalItems(totalItems - 1);
                    }
                }
                return cartItem;
                
            })
        }

    }
    //elimino todos los items deleteAll clear()
    const removeAll= () =>{
        setCarrito([]);
        setTotalItems(0);
        setTotalPrice(0);
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
            totalPrice,
            totalItems,
        }}>{children}</Provider>
    )
}

export {CartContext, CartCustomProvider}