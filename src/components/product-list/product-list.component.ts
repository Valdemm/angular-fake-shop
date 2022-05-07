import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  selectedProduct: Product | null = null;

  onCardClick(product: Product | null) {
    this.selectedProduct = product;
  }
}
