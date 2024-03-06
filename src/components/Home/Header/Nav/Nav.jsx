import style from "./nav.module.css"
const Nav = () => {
    return (
        <nav>
            <ul className={style.containerNav}>
                <li><a>Inicio</a></li>
                <li><a>Libros</a></li>
                <li><a>Otros Productos</a></li>
                <li><a>Búsqueda Avanzada</a></li>
                <li><a>Novedades</a></li>
                <li><a>Outlet</a></li>
                <li><a>Preventas</a></li>
                <li><a>Más Vendidos</a></li>
                <li>LOGOS !!</li>
            </ul>
        </nav>
    );
}
export default Nav;