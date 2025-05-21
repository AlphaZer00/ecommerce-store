export async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data);
        return data;
    } catch (error) {
        console.error("fetchProducts failed", error);
        return [];
    }
}
