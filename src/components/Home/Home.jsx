
import ProductContainer from "./ProductContainer/ProductContainer.jsx";
import promotion from "../../asset/114-es-libros.png"
import style from "./home.module.css"
const Home = () => {
    return (
        <>
            <img className={style.promotion_Container} src={promotion}></img>
            <ProductContainer section="Literatura"></ProductContainer>
            <ProductContainer section="Actualidad"></ProductContainer>
        </>
    );
}
export default Home;