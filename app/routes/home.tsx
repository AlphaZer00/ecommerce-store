import type { Route } from "./+types/home";
import "./animations.css";
import Nav from "../components/Nav";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Unbound Shop" },
        {
            name: "description",
            content:
                "Welcome to Unbound, an ecommerce store for clothing, accessories, and more!",
        },
    ];
}

export default function Home() {
    return (
        <>
            <Nav></Nav>
            <main className="flex flex-col items-center lg:flex-row justify-center pt-4 sm:pt-0 pb-4 fade-in-bottom ml-10 mr-10">
                <div className="flex flex-col items-center pb-4 ">
                    <h1 className="text-4xl font-bold pb-4">Unbound</h1>
                    <div className="max-w-[60ch] w-full pb-4">
                        <p className="pb-4">
                            Step into a curated world of modern fashion where
                            individuality meets versatility. Whether you’re
                            building a timeless wardrobe or chasing the latest
                            trend, our collection is here to reflect your unique
                            style.
                        </p>
                        <p>
                            From bold streetwear and tailored essentials to tech
                            accessories and curated extras — we’ve got the look,
                            and a little more.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="w-full max-w-lg h-auto rounded-xl drop-shadow-lg"
                        src="/images/clothes.jpg"
                        alt="Clothes"
                    />
                </div>
            </main>
        </>
    );
}
