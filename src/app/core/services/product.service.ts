import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [];

  selectedProduct: any = null;

  addProduct(product: any): void {
    this.products.push(product);
  }

  getProducts(): any[] {
    return this.products;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(
      p => p.id !== id
    );
  }

  updateProduct(productoActualizado: any): void {

    const index = this.products.findIndex(
      p => p.id === productoActualizado.id
    );

    if (index !== -1) {
      this.products[index] = productoActualizado;
    }

  }

}