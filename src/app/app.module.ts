import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/commons/nav-bar/nav-bar.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { NotFoundComponent } from './components/commons/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProductListComponent } from './components/pages/products-page/product-list/product-list.component';
import { ProductCardComponent } from './components/pages/products-page/product-list/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
  
    BrowserModule,
  
    FormsModule,

    AppRoutingModule,
    
     ReactiveFormsModule,
   
     BrowserAnimationsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
