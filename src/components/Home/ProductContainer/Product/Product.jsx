const Product = ({ data }) => {
    console.log(data);
    return (
        <div>
            <img src={data.thumbnail}></img>
            <h4>{data.title}</h4>
            <p><strong>{data.price}</strong></p>
            <button id={data.id}>Comprar</button>
        </div>
    );
}

export default Product;