import type { Product } from "./product";

export type CartItem = Product & { quantity: number };

export type CartContext = {
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
};