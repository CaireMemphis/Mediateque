import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/components/models/album.model';
import { Film } from 'src/app/components/models/film.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {
  @Input()
  produit: any;
  @Input()
  typeProduct: string="";

IMG_DEFAULT : string =  "https://img.freepik.com/vecteurs-libre/astronaute-mignon-flottant-ballon-planete-dans-illustration-icone-vecteur-dessin-anime-espace-concept-icone-science-technologie-isole-vecteur-premium-style-dessin-anime-plat_138676-3850.jpg?t=st=1656013798~exp=1656014398~hmac=e7287bffc21b438e4024cd62b5acbfe8db86a631074842358cf618d9698c4428&w=826" ;



constructor() { }

ngOnInit(): void {

  console.log(this.produit)
}


}
