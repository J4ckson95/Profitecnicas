import Header from "./Header/Header";
import promotion from "../../asset/114-es-libros.png"
const Home = () => {
    return (
        <>
            <Header></Header>
            <div>
                <img src={promotion}></img>
            </div>
        </>
    );
}
export default Home;