import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom/CheckOutFrom.jsx"
const stripePromise = loadStripe("pk_test_51P32WKLCGcy3rstAzVJZVbgVxCtpVEABOzPXbxGwIvSDsJOavN23P5TpxtgisT0SDau38zif2qNvhsq5PcYUxaQU00j9rmPdHm")
const Payment = () => {
    const [cart, setCart] = useState([])
    const [clienteSecret, setClienteSecret] = useState("")
    useEffect(() => {
        const getCart = () => {
            fetch(`http://localhost:8080/api/carts/`, { credentials: "include" })
                .then((res) => res.json())
                .then((data) => setCart(data))
        }
        const payment = () => {
            fetch("http://localhost:8080/api/payment/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cart) //! Pendiente Items del carrito 
            })
                .then((res) => res.json())
                .then((data) => setClienteSecret(data.clientesecret))
        }
        getCart()
        console.log(cart);
        payment()
    }, []);
    const appearance = {
        theme: "stripe"
    }
    const options = {
        clienteSecret,
        appearance
    }
    return (
        <>
            {clienteSecret &&
                <Elements options={options} stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>}
        </>
    );
}
export default Payment;