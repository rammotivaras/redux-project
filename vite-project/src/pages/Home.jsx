import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
const Home = () => {
    const [products, setProducts] = useState([]);
const dispatch = useDispatch() ;

    const fetchProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const handleClick =(product)=>{
      dispatch(add(product))
    }

    return (
        <div className="product-wrapper">
            {
                products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-cart">
                            <img src={product.image} alt="img" style={{ width: '100px', height: '100px' }} />
                            <h4>{product.title}</h4>
                            <h5>${product.price}</h5>
                            <button onClick={()=>handleClick(product)}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )
            }
        </div>
    );
}

export default Home;
