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

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const salesTax = subTotal * 0.08875;

    const totalPrice = subTotal + salesTax + 5;

    return (
        <div className="flex flex-col justify-center min-h-screen">
            <Nav></Nav>
            <div className="grow-1 flex flex-col items-center m-4 fade-in-bottom">
                <h1 className="text-3xl font-bold pb-4">Shopping Cart</h1>
                <div className="flex flex-col justify-center">
                    <ul className="flex flex-col gap-4 border rounded-xl !p-5 !mb-5">
                        {cartItems.map((item) => (
                            <li className="flex" key={item.id}>
                                <div className="image-container bg-white rounded-2xl p-2 mr-4">
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
                <div className="order-summary flex flex-col gap-1 max-w-2xs border rounded-xl p-5 min-w-2xs">
                    <h1 className="font-bold">Order Summary</h1>
                    <div className="flex justify-between">
                        <p>Subtotal:</p>
                        <p className="font-semibold">${subTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Sales Tax:</p>
                        <p className="font-semibold">${salesTax.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between pb-1">
                        <p>Delivery Fee:</p>
                        <p className="font-semibold">$5.00</p>
                    </div>
                    <hr className="p-1" />
                    <div className="flex justify-between">
                        <p>Total Price:</p>
                        <p className="font-semibold">
                            ${totalPrice.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
