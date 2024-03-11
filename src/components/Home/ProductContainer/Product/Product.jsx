import style from "./product.module.css"
const Product = ({ data }) => {
    return (
        <div className={style.productItem}>
            <img src={data.thumbnail}></img>
            <h4>{data.title}</h4>
            <p><strong>{data.price}</strong></p>
            <button id={data.id}>Comprar</button>
        </div>
    );
}

export default Product;