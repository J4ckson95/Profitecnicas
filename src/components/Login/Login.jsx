import style from "./login.module.css"
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
                    <button>Inciar Sesion</button>
                </form>
            </div>
        </div>
    );
}

export default Login;