import { Link } from "react-router"

export default function Nav() {
    return (
        <div className="w-full flex justify-center gap-10 p-5  dark:text-white">
            <button className="hover:scale-110 text-black h-full dark:text-white">Home</button>
            <Link to="/shop">
                <button className="hover:scale-110 text-black dark:text-white">Shop</button>
            </Link>
        </div>
    )
}