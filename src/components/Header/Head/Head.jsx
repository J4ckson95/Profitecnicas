import titleLogo from "../../../asset/logo.png"
import cart from "../../../asset/carrito-de-compras.png"
import logoSearch from "../../../asset/buscar.png"
import style from "./head.module.css"
import { Link, Navigate } from "react-router-dom"
import { getCookie } from "../../../utils/Cookie.js"
import { Toaster, toast } from "sonner"
import { useState } from "react"
const Head = () => {
    const cookie = getCookie()
    const [redirect, setRedirect] = useState(false)
    const handleCart = () => {
        if (!cookie) toast("Debe iniciar Sesión para poder ingresar al carrito", { position: "top-right", duration: 5000 })
        else setRedirect(true)

    }
    return (
        <div className={style.Head}>
            <div className={style.Head_Logo}>
                <Link to={"/"}><img className={style.logo} src={titleLogo}></img></Link>
            </div>
            <div className={style.Head_Search}>
                <input placeholder="Titulo, Autor o ISBN"></input>
                <div className={style.search}><img src={logoSearch}></img></div>
            </div>
            <div className={style.Head_Count}>
                <div className={style.Count_cart}>
                    <img onClick={handleCart} src={cart}></img>
                    {/*<span>0</span>*/}
                </div>
                <p>Mi Compra</p>
            </div>
            <Toaster></Toaster>
            {redirect && <Navigate to={"/cart"}></Navigate>}
        </div>
    );
}
export default Head;