import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

import { HeaderComponent } from 'src/components/header/header.component';
import { ProductListComponent } from 'src/components/product-list/product-list.component';
import { ProductDetailsModalComponent } from 'src/components/product-details-modal/product-details-modal.component';
import { ProductRegistrModalComponent } from 'src/components/product-registr-modal/product-registr-modal.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailsModalComponent,
    ProductRegistrModalComponent,
  ],
  imports: [
    AngularYandexMapsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
