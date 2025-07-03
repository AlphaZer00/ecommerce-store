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
            <div className="m-4">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="flex flex-col">
                    <ul className="flex flex-col gap-4 border rounded-xl !p-5">
                        {cartItems.map((item) => (
                            <li className="flex" key={item.id}>
                                <div className="image-container bg-white rounded-2xl p-2 mr-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-30 h-30 object-contain"
                                    />
                                </div>
                                <div className="info flex flex-col flex-grow">
                                    <div className="top-line flex justify-between">
                                        <h2>{item.title}</h2>
                                        <button
                                            className="mt-2 px-3 bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="Description text-xs text-gray-400 max-w-xl">
                                        {item.description}
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-medium">
                                            $
                                            {(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </p>
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
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
