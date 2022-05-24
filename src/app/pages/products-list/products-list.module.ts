import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { MatInputModule } from '@angular/material/input';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent],
	imports: [CommonModule, MatInputModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
