import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { NotFoundComponent } from './components/commons/not-found/not-found.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';


const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: "full"},
{path:'home',component: HomePageComponent},
{path:'product',component: ProductsPageComponent},
{path:'product/:type/:id',component: ProductPageComponent},
{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
