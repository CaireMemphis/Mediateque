import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { Film } from '../../models/film.model';
import { AlbumHttpService } from '../../services/album/album.service';
import { FilmHttpService } from '../../services/film/film.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  films: Film[] = [];
  albums: Album[] = [];


  film:string="Film";
  album:string="Album";

   
  constructor(private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { 
    this.serviceFilm.findAll().subscribe((data)=> this.films =data);
    this.serviceAlbum.findAll().subscribe((data)=> this.albums=data);
    


  }
  ngOnInit(): void {
  }
}
