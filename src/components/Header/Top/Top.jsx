
import { Navigate } from "react-router-dom";
import styled from "./top.module.css"
import { getCookie } from "../../../utils/Cookie";
import { useState } from "react";
const Top = () => {
    const [login, setLogin] = useState(false)
    const [pageUser, setPageUser] = useState(false)
    const cookie = getCookie()
    const handleClick = () => {
        if (cookie) setPageUser(true)
        else setLogin(true)
    }
    return (
        <div className={styled.top_container}>
            <ul className={styled.menu_top}>
                <li>Quines Somos</li>
                <li>Contacto</li>
                <li onClick={handleClick}>Mi cuenta</li>
            </ul>
            {login && <Navigate to={"/login"}></Navigate>}
            {pageUser && <Navigate to={"/user"}></Navigate>}
        </div>
    );
}
export default Top;