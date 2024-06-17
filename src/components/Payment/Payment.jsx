import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom/CheckOutFrom.jsx"
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe("pk_test_51P32WKLCGcy3rstAzVJZVbgVxCtpVEABOzPXbxGwIvSDsJOavN23P5TpxtgisT0SDau38zif2qNvhsq5PcYUxaQU00j9rmPdHm")
const Payment = () => {
    const [clientSecret, setClienteSecret] = useState("")
    const location = useLocation()
    const { totalPrice } = location.state
    useEffect(() => {
        const payment = () => {
            fetch("http://localhost:8080/api/payment/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ totalPrice }) //! Pendiente Items del carrito 
            })
                .then((res) => res.json())
                .then((data) => setClienteSecret(data.clientSecret))
        }
        payment()
    }, [])
    const appearance = {
        theme: "stripe"
    }
    const options = {
        clientSecret,
        appearance
    }
    return (
        <>
            {clientSecret &&
                <Elements options={options} stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>}
        </>
    );
}
export default Payment;