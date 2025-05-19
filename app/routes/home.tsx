import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Unbound Shop" },
    { name: "description", content: "Welcome to Unbound, an ecommerce store for clothing, accessories, and more!" },
  ];
}

export default function Home() {
    return (
        <main className="flex flex-col items-center md:flex-row justify-center pt-16 pb-4"> 
            <div className="flex flex-col items-center max pb-4">
                <h1 className="text-6xl font-bold pb-4">Unbound</h1>
                <p className="max-w-[60ch] w-full px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eros magna, imperdiet sit amet nulla tempus, luctus placerat lectus. Mauris venenatis consequat aliquet. Donec pretium tincidunt sapien, eu imperdiet lacus eleifend in. Nunc vulputate tortor sit amet turpis pharetra porttitor. Suspendisse blandit vitae ipsum porta tincidunt. Sed nec massa sem. Donec consectetur dolor quis faucibus condimentum. Cras efficitur nibh sit amet posuere porttitor. Donec eget odio pretium, imperdiet turpis a, mollis metus.</p>
            </div>
            <div>
                <img className="w-full max-w-lg h-auto" src="public/images/clothes.jpg" alt="Clothes" />
            </div>
        </main>
    )
}