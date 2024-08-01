export interface IProduct {
  _id?: string;
  title: string;
  slug: string;

  quantity: number;
  price: number;
  imageCover: string;
  category: { name: string };
  brand: { name: string };
}
