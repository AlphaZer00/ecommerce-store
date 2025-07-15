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
                    <ul
                        className={`flex flex-col gap-4 rounded-xl !p-5 !mb-5 ${
                            cartItems.length > 0 ? "border" : ""
                        }`}
                    >
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
                                        <h2 className="mr-4">{item.title}</h2>
                                        <button
                                            className="mt-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="size-6"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="Description text-xs text-gray-400 max-w-xl pr-10">
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
                                            className="max-w-10"
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
