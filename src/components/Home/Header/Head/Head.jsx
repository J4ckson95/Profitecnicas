import titleLogo from "../../../../asset/logo.png"
import cart from "../../../../asset/carrito-de-compras.png"
import style from "./head.module.css"
const Head = () => {
    return (
        <div className={style.Head}>
            <div>
                <img src={titleLogo}></img>
            </div>
            <div className={style.Head_Search}>
                <input placeholder="Titulo, Autor o ISBN"></input>
                <button></button>
            </div>
            <div className={style.Head_Count}>
                <img src={cart}></img>
                <p>Mi Compra</p>
            </div>
        </div>
    );
}
export default Head;