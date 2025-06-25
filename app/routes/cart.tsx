import { useOutletContext } from "react-router";
import type { CartContext } from "~/types/cart";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

export default function Cart() {
    const { cartItems, setCartItems } = useOutletContext<CartContext>();
    return (
        <>
            <Nav></Nav>
            <div>
                <h1>Cart</h1>
                <ul className="flex flex-col gap-2">
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-40 h-40 object-contain mb-4"
                            />
                            <p>Quantity: {item.quantity}</p>
                            <p>${item.price.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer></Footer>
        </>
    );
}
