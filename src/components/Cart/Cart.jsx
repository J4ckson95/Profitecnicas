import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./cart.module.css"
import ProductCart from "./ProductCart/ProductCart.jsx";
import Payment from "../Payment/Payment.jsx";
const Cart = () => {
    const [data, setData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [change, setChange] = useState(false)
    const navigete = useNavigate()
    useEffect(() => {
        const getData = async () => {
            const query = await fetch(`http://localhost:8080/api/carts/`, { credentials: "include" })
            const result = await query.json()
            if (result) setData(result.payload)
        }
        getData()
        setChange(false)
    }, [change]);
    useEffect(() => {
        let total = 0
        data.forEach((element) => {
            total += element.quantity * element.product.price;
        })
        setTotalPrice(total)
    }, [data])
    const handleClick = () => {
        navigete("/payment")
    }
    return (
        <div className={style.Cart_Page}>
            <h2 className={style.title}>Mi Compra</h2>
            <table>
                <thead>
                    <tr>
                        <th className={style.articulo}>Articulo</th>
                        <th className={style.cantidad}>Cantidad</th>
                        <th className={style.unidad}>Precio Unidad</th>
                        <th className={style.total}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map((element, index) => <ProductCart key={index} data={element} setChange={setChange}></ProductCart>)}
                </tbody>
            </table>
            <div className={style.byProduct}>
                <h2>Total<strong>{totalPrice}</strong></h2>
                <button onClick={handleClick}>Realizar Pedido</button>
            </div>
        </div>
    );
}
export default Cart;