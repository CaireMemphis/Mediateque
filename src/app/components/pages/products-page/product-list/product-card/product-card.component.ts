import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input()
films: any[]= []
albums: any[] = []

@Input()
  produit: any;


  constructor() { }

  ngOnInit(): void {
  }

}
