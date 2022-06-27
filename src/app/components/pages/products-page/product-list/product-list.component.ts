import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: any[] = [];
  @Input()
  type:string="rien";
  
  @Output() delete = new EventEmitter;

  constructor() {
    //alert(this.products instanceof Film);
   }

  ngOnInit(): void {
  }
  onDelete(id:number){
    this.delete.emit(id)
  }
}
