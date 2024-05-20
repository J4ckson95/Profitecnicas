
import { useNavigate } from "react-router-dom";
import styled from "./top.module.css"
import { getCookie } from "../../../utils/Cookie";
const Top = () => {
    const navigate = useNavigate()
    const cookie = getCookie()
    const handleClick = () => {
        if (cookie) return navigate("/user")
        else return navigate("login")
    }
    return (
        <div className={styled.top_container}>
            <ul className={styled.menu_top}>
                <li>Quines Somos</li>
                <li>Contacto</li>
                <li onClick={handleClick}>Mi cuenta</li>
            </ul>

        </div>
    );
}
export default Top;
