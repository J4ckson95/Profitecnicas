import style from "./product.module.css"
import { Link } from "react-router-dom";
import Button from "../../../Button/Button.jsx";
const Product = ({ data }) => {
    return (
        <div className={style.productItem}>
            <Link to={`/product/${data.id}`}>
                <img src={data.thumbnail}></img>
            </Link>
            <h4>{data.title}</h4>
            <h5>{data.author}</h5>
            <p><strong>${data.price}</strong></p>
            <Button id={data._id}></Button>
        </div>
    );
}
export default Product;