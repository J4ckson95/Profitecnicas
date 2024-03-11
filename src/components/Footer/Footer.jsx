import logo from "../../asset/logo-white.png"
import style from "./footer.module.css"
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <img src={logo}></img>
                <div>
                    <h4>Contacto</h4>
                    <p>(7)6576974-6424620</p>
                    <p>ventasweb@profitecnicas.com</p>
                </div>
                <div>
                    <h4>Páginas Legales</h4>
                    <p>Condiciones de venta</p>
                    <p>Protección de datos</p>
                    <p>Politicas de cookies</p>
                </div>
                <div>
                    <h4>Atención al Cliente</h4>
                    <p>LIbrería Profitécnicas</p>
                    <p>¿No encuentras lo que buscas?</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;