import Nav from "../components/nav";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fakeStoreApi";

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return (
        <div>
            <Nav></Nav>
            <h1>Shop</h1>
            <ul>
                {products.map((product: Array<object>) => (
                    <li key={product.id} className="mb-2">
                        <p>{product.title}</p>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-20"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
