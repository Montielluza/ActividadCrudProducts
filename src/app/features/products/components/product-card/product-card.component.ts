import { Component, Input } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input()
  product: any;

  constructor(
    private productService: ProductService
  ) {}

  eliminar(): void {

    this.productService.deleteProduct(
      this.product.id
    );

  }
  seleccionarProducto(): void {

  this.productService.selectedProduct = {
    ...this.product
  };

  }

}