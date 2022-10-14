export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    rating: number,
    stock: number,
    category: number,
    brand: string,
    thumbnail: string
};

export interface IProductResponse {
    products: IProduct[];
}