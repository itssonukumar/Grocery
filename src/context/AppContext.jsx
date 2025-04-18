import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const currency=import.meta.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(null)
    const [showUserLogin, setShowUserLogin] = useState(null)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])


    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    // add product to cart
const addToCart=(itemId)=>{
    let cartData=structuredClone(cartItems);

    if(cartData[itemId]){
        cartData[itemId] +=1;
    }
    else{
        cartData[itemId]=1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
}

//update cart items
const updateCartItems=(itemId,quantity)=>{
    let cartData=structuredClone(cartItems);
    cartData[itemId]=quantity;
    setCartItems(cartData)
    toast.success("cart updated")

}

//remove products from cart

const removeFromcart=(itemId)=>{
    let cartData=structuredClone(cartItems);
    if(cartData[itemId]){
        cartData[itemId] -=1;
        if(cartData[itemId]===0){
            delete cartData[itemId];
        }

    }
    toast.success("Removed From cart")
    setCartItems(cartData)
}


    useEffect(() => {
        fetchProducts()
    }, [])

    const value = { navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin, products,currency,addToCart,updateCartItems,removeFromcart,cartItems }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}