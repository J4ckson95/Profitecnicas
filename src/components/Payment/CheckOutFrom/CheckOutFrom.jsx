import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import style from "./checkoutfrom.module.css"
const CheckOutFrom = () => {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!stripe) return
        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret")
        if (!clientSecret) return
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!")
                    break
                case "processing":
                    setMessage("Your payment is processing")
                    break
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again")
                    break
                default:
                    setMessage("Something went wrong")
                    break
            }
        })
    }, [stripe])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) return
        setIsLoading(true)
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: ""//! PENDIENTE URL DEL BACKEND
            }
        })
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message)
        } else setMessage("An unexpected error occurred")
        setIsLoading(false)
    }
    const paymentElementOptions = {
        layout: "tabs"
    }
    return (
        <form className={style.from} onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" options={paymentElementOptions}></PaymentElement>
            <button className={style.button} disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className={style.spinner} id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}
export default CheckOutFrom;