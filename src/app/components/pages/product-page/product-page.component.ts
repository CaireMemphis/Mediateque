import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumHttpService } from '../../services/album/album.service';
import { FilmHttpService } from '../../services/film/film.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  data! : any;

  
  typeProduit:string="Film";

  constructor(private route:ActivatedRoute,private router:Router,private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { }

  ngOnInit(): void {


   /* Vérifier si le type de produit est un film. Si c'est le cas, il obtiendra l'identifiant du
   produit, puis il obtiendra les données du produit. */

  
   if(this.route.snapshot.paramMap.get('type') == "Film"){
      const id= this.route.snapshot.paramMap.get('id');
       
      if(id){
        this.data = this.serviceFilm.findById(parseInt(id)).subscribe((data)=> this.data=data);
      }
        
    }
    /* Obtenir l'identifiant du produit, puis obtenir les données du produit. */
    else{
      const id= this.route.snapshot.paramMap.get('id');
       
      if(id){
        this.data = this.serviceAlbum.findById(parseInt(id)).subscribe((data)=> this.data=data);
      }
    }

  }

}
