import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom/CheckOutFrom.jsx"
const stripePromise = loadStripe("pk_test_51P32WKLCGcy3rstAzVJZVbgVxCtpVEABOzPXbxGwIvSDsJOavN23P5TpxtgisT0SDau38zif2qNvhsq5PcYUxaQU00j9rmPdHm")
console.log("Promesa Stripe", stripePromise);
const Payment = () => {
    const [clienteSecret, setClienteSecret] = useState("")
    useEffect(() => {
        fetch("RUTA PENDIENTE DE CREAR", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify() //! Pendiente Items del carrito 
        })
            .then((res) => res.json())
            .then((data) => setClienteSecret(data.clientesecret))
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