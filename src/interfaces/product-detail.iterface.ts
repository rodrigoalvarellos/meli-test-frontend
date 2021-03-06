import { Category } from './category.interface';

export interface ProductDetailItem {
  author: {
    name: string;
    lastname: string;
  };
  categories: Category[];
  item: {
    id: string;
    seller_id: string;
    title: string;
    price: {
      currency: string;
      amount: string;
      decimals: string;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    permalink: string;
  };
}
