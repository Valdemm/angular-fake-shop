import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  loading = true;
  products: Product[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;

    this.http
      .get<Product[]>('https://fakestoreapi.com/products?limit=10')
      .subscribe((data) => {
        this.products = this.products.concat(data);
        this.loading = false;
      });
  }

  onScroll() {
    if (this.products.length >= 50) return;

    this.getData();
  }
}
