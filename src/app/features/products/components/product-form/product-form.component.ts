import { Component } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements DoCheck{

  nombre: string = '';
  precio: number = 0;

  constructor(
  public productService: ProductService
){}

  crearProducto(): void {

  if(this.productService.selectedProduct){

    this.actualizarProducto();
    return;

  }

  const producto = {
    id: Date.now(),
    nombre: this.nombre,
    precio: this.precio
  };

  this.productService.addProduct(producto);

  this.nombre = '';
  this.precio = 0;

  }

  formularioValido(): boolean {

    return this.nombre.trim() !== ''
      && this.precio > 0;

  }
  get productoSeleccionado() {
  return this.productService.selectedProduct;
  }

  actualizarProducto(): void {

  this.productService.updateProduct({
    id: this.productService.selectedProduct.id,
    nombre: this.nombre,
    precio: this.precio
  });

  this.nombre = '';
  this.precio = 0;

  this.productService.selectedProduct = null;

  }
  ngDoCheck(): void {

  if(this.productService.selectedProduct){

    this.nombre =
      this.productService.selectedProduct.nombre;

    this.precio =
      this.productService.selectedProduct.precio;
  }

  }
}