import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 flex flex-col items-center transition-transform duration-200 hover:scale-102 min-h-90">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-contain mb-4 transition-transform duration-300"
      />
      <h2 className="text-lg font-semibold text-center line-clamp-2 text-black">{product.title}</h2>
      <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart?.(product)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:scale-98 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}
