import titleLogo from "../../../../asset/logo.png"
import cart from "../../../../asset/carrito-de-compras.png"
import logoSearch from "../../../../asset/buscar.png"
import style from "./head.module.css"
const Head = () => {
    return (
        <div className={style.Head}>
            <div className={style.Head_Logo}>
                <img src={titleLogo}></img>
            </div>
            <div className={style.Head_Search}>
                <input placeholder="Titulo, Autor o ISBN"></input>
                <div className={style.search}><img src={logoSearch}></img></div>
            </div>
            <div className={style.Head_Count}>
                <div className={style.Count_cart}>
                    <img src={cart}></img>
                    <span>0</span>
                </div>
                <p>Mi Compra</p>
            </div>
        </div>
    );
}
export default Head;