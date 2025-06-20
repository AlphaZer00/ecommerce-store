import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fakeStoreApi";
import type { Product } from "../types/product";
import ProductCard from "~/components/ProductCard";
import Footer from "~/components/Footer";
import { useOutletContext } from "react-router";
import type { CartContext } from "~/types/cart";

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const { cartItems, setCartItems } = useOutletContext<CartContext>();

    const addToCart = (product: Product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity ?? 1) + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        console.log('CartItems', cartItems);
    };

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return (
        <div className="flex flex-col justify-center">
            <Nav></Nav>
            <main className="grow-1 px-5 pb-5 flex flex-col align-middle items-center justify-center bg-bg text-font-color fade-in-bottom pt-5">
                <h1 className="text-4xl font-bold pb-4">Shop</h1>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
                    {products.map((product) => (
                        <li key={product.id} className="mb-2">
                            <ProductCard
                                product={product}
                                onAddToCart={addToCart}
                            ></ProductCard>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer></Footer>
        </div>
    );
}
