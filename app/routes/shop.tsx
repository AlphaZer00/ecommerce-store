import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fakeStoreApi";
import type { Product } from "../types/product";
import ProductCard from "~/components/ProductCard";

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center pr-5 pl-5">
            <Nav></Nav>
            <h1 className="text-4xl font-bold pb-4">Shop</h1>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        <ProductCard
                            product={product}
                            onAddToCart={(p) => console.log("Added to cart", p)}
                        ></ProductCard>
                    </li>
                ))}
            </ul>
        </div>
    );
}
