
import { Link } from "react-router-dom";
import styled from "./top.module.css"
const Top = () => {
    return (
        <div className={styled.top_container}>
            <ul className={styled.menu_top}>
                <li>Quines Somos</li>
                <li>Contacto</li>
                <li><Link to={"/login"}> Mi cuenta</Link></li>
            </ul>
        </div>
    );
}
export default Top;