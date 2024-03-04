import styled from "./top.module.css"
const Top = () => {
    return (
        <div className={styled.top_container}>
            <ul className={styled.container}>
                <li><a>Quines Somos</a></li>
                <li><a>Contacto</a></li>
                <li className={styled.count}><a>Mi Cuenta</a></li>
            </ul>
        </div>
    );
}
export default Top;