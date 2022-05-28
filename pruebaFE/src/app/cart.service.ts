import { Injectable } from '@angular/core';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = [];

  constructor(private libroService:ServicesService) { }

  addToCart(item:any){
    this.items.push(item);

  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
