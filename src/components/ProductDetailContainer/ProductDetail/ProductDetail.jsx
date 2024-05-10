import style from "./productdetail.module.css"
import Button from "../../Button/Button.jsx";
const ProductDetail = ({ data }) => {
    return (
        <div className={style.productdetail_Container}>
            <div className={style.productDetail}>
                <div className={style.productImg}>
                    <img src={data.thumbnail}></img>
                </div>
                <div className={style.detail}>
                    <h3>{data.title}</h3>
                    <h4><strong>Author: </strong> {data.author}</h4>
                    <p><strong>Genero: </strong> {data.genre}</p>
                </div>
                <div className={style.contendBy}>
                    <p>${data.price}</p>
                    <Button id={data._id}></Button>
                </div>
            </div>
            <div className={style.sinopsis}>
                <h5>Sinopsis</h5>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default ProductDetail;