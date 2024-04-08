
import ProductContainer from "./ProductContainer/ProductContainer.jsx";
import promotion from "../../asset/114-es-libros.png"
import style from "./home.module.css"
const Home = () => {
    return (
        <div className={style.home}>
            <img className={style.promotion_Container} src={promotion}></img>
            <ProductContainer section="Literatura"></ProductContainer>
            <ProductContainer section="Actualidad"></ProductContainer>
            <ProductContainer section="Novedades"></ProductContainer>
        </div>
    );
}
export default Home;