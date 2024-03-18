import style from "./login.module.css"
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className={style.loginContainer}>
            <div className={style.login}>
                <h2>Iniciar Sesion</h2>
                <form>
                    <label>Email :</label>
                    <input type="text" id="email"></input>
                    <label>Contraseña :</label>
                    <input type="password" id="password"></input>
                    <button className={style.session}>Inciar Sesion</button>
                    <button>Inicia Sesion con Google</button>
                    <p>No tienes cuenta <Link to={"/register"}>Registrate</Link> </p>
                </form>
            </div>
        </div>
    );
}

export default Login;