export async function getProducts(){
    const res = await fetch(`/products`);
    const json = await res.json();
    return json;
}