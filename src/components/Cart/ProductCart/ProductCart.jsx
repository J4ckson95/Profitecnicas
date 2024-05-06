
import style from "./productcart.module.css"
const ProductCart = ({ data, setChange }) => {
    const totalPrice = data.quantity * data.product.price
    const updateCart = (operation) => {
        let newQuantity = data.quantity
        if (operation === "more") newQuantity = newQuantity + 1
        if (operation === "less") newQuantity = newQuantity - 1
        fetch(`http://localhost:8080/api/carts/updatecart/${data.product._id}/${newQuantity}`,
            {
                credentials: "include",
                method: "PATCH"
            }).then((res) => {
                if (res.status === 200) setChange(true)
            })
    }
    return (
        <tr>
            <td className={style.article}><h3>{data.product.title}</h3><img src={data.product.thumbnail}></img></td>
            <td className={style.quantity}><button onClick={() => updateCart("less")}>-</button><h3>{data.quantity}</h3><button onClick={() => updateCart("more")}>+</button></td>
            <td><h3>{data.product.price}</h3></td>
            <td><h3>{totalPrice}</h3></td>
        </tr>
    );
}
export default ProductCart;