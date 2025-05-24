import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fakeStoreApi";
import type { Product } from "../types/product";

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <Nav></Nav>
            <h1 className="text-4xl font-bold pb-4">Shop</h1>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        <p>{product.title}</p>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-30"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
