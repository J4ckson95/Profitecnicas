import Header from "./Header/Header";
import ProductContainer from "./ProductContainer/ProductContainer.jsx";
import promotion from "../../asset/114-es-libros.png"
import style from "./home.module.css"
const Home = () => {
    return (
        <>
            <Header></Header>
            <img className={style.promotion_Container} src={promotion}></img>
            <ProductContainer section="Literatura"></ProductContainer>
        </>
    );
}
export default Home;