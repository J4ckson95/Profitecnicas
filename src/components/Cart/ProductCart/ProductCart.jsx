import { useEffect, useState } from "react";
import style from "./productcart.module.css"
const ProductCart = ({ data, onPrice, ResetTotal }) => {
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(data.quantity)
    useEffect(() => {
        const getData = async () => {
            const query = await fetch(`http://localhost:8080/api/products/${data._id}`, { credentials: "include" })
            const result = await query.json()
            const total = data.quantity * result.payload.price
            onPrice(total);
            setProduct(result.payload)
            setTotal(total)
        }
        getData()
    }, []);
    const handleLess = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
            const newTotal = product.price * (quantity - 1);
            setTotal(newTotal);
            onPrice(newTotal);
        }
    };

    const handleMore = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        const newTotal = product.price * (quantity + 1);
        setTotal(newTotal);
        onPrice(newTotal);
    };
    return (
        <tr>
            <td className={style.article}><h3>{product.title}</h3><img src={product.thumbnail}></img></td>
            <td className={style.quantity}><button onClick={handleLess}>-</button><h3>{quantity}</h3><button onClick={handleMore}>+</button></td>
            <td><h3>{product.price}</h3></td>
            <td><h3>{total}</h3></td>
        </tr>
    );
}
export default ProductCart;