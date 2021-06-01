import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable()
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    window.alert('dodano product');
    this.items.push(product);
  }

  getItems(): Product[] {
    console.log(this.items);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
