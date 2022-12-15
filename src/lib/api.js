const FIREBASE_DOMAIN = 'https://roarbikes-store-default-rtdb.firebaseio.com';

export async function getAllProducts() {
    const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);

    if (!response.ok) throw new Error('Could not get data');

    const data = await response.json();

    return data;
}
