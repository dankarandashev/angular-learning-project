import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	products!: { name: string }[];

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.getProducts$().subscribe((products) => {
			this.products = products;
			this.cdr.markForCheck();
		});
	}

	private getProducts$(): Observable<{ name: string }[]> {
		return timer(3000).pipe(
			map(() => [
				{ name: 'product 1' },
				{ name: 'product 2' },
				{ name: 'product 3' },
				{ name: 'product 4' },
				{ name: 'product 5' },
				{ name: 'product 6' },
				{ name: 'product 7' },
				{ name: 'product 8' },
				{ name: 'product 9' },
			]),
		);
	}
}
