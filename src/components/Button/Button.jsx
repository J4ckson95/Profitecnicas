import { getCookie } from "../../utils/Cookie.js"
import style from "./button.module.css"
import { Toaster, toast } from "sonner"
const Button = ({ id }) => {

    const handleClick = async () => {
        const cookie = getCookie()
        if (!cookie) {
            toast("Debe iniciar sesión para agregar los productos al carrito", { position: "top-right", duration: 5000 })
        }
        else {
            const byProduct = await fetch(`http://localhost:8080/api/carts/product/${id}`, { credentials: "include", method: "PATCH" })
            const result = await byProduct.json()
            if (result.status === "Success") toast("Producto agregado al carrito", { position: "top-right", duration: 5000 })
        }
    }
    return (
        <>
            <button className={style.button} onClick={handleClick}>Agregar al carrito</button>
            <Toaster></Toaster>
        </>
    );
}
export default Button;