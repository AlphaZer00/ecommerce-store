import { Link } from "react-router";

export default function Nav() {
    return (
        <div className="w-full flex justify-center gap-10 p-5 text-font-color-light bg-nav">
            <Link to="/">
                <button
                    role="link"
                    className="relative transition transform hover:scale-107 duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
                >
                    Home
                </button>
            </Link>
            <Link to="/shop">
                <button
                    role="link"
                    className="relative transition transform hover:scale-107 duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
                >
                    Shop
                </button>
            </Link>
            <Link to="/cart">
                <button role="link" className="absolute right-5">
                    Cart
                </button>
            </Link>
        </div>
    );
}
