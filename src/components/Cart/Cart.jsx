import style from "./cart.module.css"
import { useEffect, useState } from "react";
import ProductCart from "./ProductCart/ProductCart.jsx";
const Cart = () => {
    const [data, setData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const getData = async () => {
            const query = await fetch(`http://localhost:8080/api/carts/`, { credentials: "include" })
            const result = await query.json()
            if (result) setData(result.payload.products)
        }
        getData()
    }, []);
    const handlePrice = (price) => {
        setTotalPrice(prevPrice => prevPrice + price);
    }
    const ResetTotal = () => {
        setTotalPrice(0)
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
                    {data.length > 0 && data.map((element, index) => <ProductCart ResetTotal={ResetTotal} onPrice={handlePrice} key={index} data={element}></ProductCart>)}
                </tbody>
            </table>
            <div className={style.byProduct}>
                <h2>Total<strong>{totalPrice}</strong></h2>
                <button>Realizar Pedido</button>
            </div>
        </div >
    );
}
export default Cart;