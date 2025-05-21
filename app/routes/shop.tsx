import Nav from "../components/nav";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fakeStoreApi";
import type { Product } from "../types/product";

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return (
        <div>
            <Nav></Nav>
            <h1>Shop</h1>
            <ul>
                {products.map((product) => (
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
