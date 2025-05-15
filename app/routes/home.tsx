import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4"> 
            <div className="flex flex-col items-center max">
                <h1 className="text-6xl font-bold pb-4">Home Page</h1>
                <p className="max-w-[60ch] w-full px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eros magna, imperdiet sit amet nulla tempus, luctus placerat lectus. Mauris venenatis consequat aliquet. Donec pretium tincidunt sapien, eu imperdiet lacus eleifend in. Nunc vulputate tortor sit amet turpis pharetra porttitor. Suspendisse blandit vitae ipsum porta tincidunt. Sed nec massa sem. Donec consectetur dolor quis faucibus condimentum. Cras efficitur nibh sit amet posuere porttitor. Donec eget odio pretium, imperdiet turpis a, mollis metus.</p>
            </div>
        </main>
    )
}