import { useOutletContext } from "react-router";
import type { CartContext } from "~/types/cart";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import type { Product } from "~/types/product";

export default function Cart() {
    const { cartItems, setCartItems } = useOutletContext<CartContext>();

    const removeFromCart = (product: Product) => {
        setCartItems((prevCart) =>
            prevCart.filter((item) => item.id !== product.id)
        );
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1 || Number.isNaN(quantity)) return;

        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

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
                            <div className="mb-2">
                                <label className="mr-2">Quantity:</label>
                                <input
                                    className="max-w-15"
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        updateQuantity(
                                            item.id,
                                            parseInt(e.target.value)
                                        )
                                    }
                                />
                            </div>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                                className="mt-2 px-3 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => removeFromCart(item)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer></Footer>
        </>
    );
}
