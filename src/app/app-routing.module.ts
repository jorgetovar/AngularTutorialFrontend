import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductSelectionComponent} from './product-selection/product-selection.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'product-selection', component: ProductSelectionComponent},
  {path: 'product-detail', component: ProductDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
