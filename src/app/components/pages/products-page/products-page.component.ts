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

  editData?: any;
  film:string="Film";
  album:string="Album";

   
  constructor(private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { 
    this.serviceFilm.findAll().subscribe((data)=> this.films =data);
    this.serviceAlbum.findAll().subscribe((data)=> this.albums=data);
    


  }
  ngOnInit(): void {
  }
  onDeleteFilm(id: number) {
    this.serviceFilm.delete(id).subscribe(() => {
      this.films = this.films.filter(film => film.id !== id)
    })
  }

  onDeleteAlbum(id: number) {
    this.serviceAlbum.delete(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id)
    })
  }

  onSaveFilm(film: any) {
    this.serviceFilm.save(film).subscribe((newFilm: any) => this.films.push(newFilm))
  }

  onSaveAlbum(album: any) {
    this.serviceAlbum.save(album).subscribe((newAlbum: any) => this.albums.push(newAlbum))
  }
 
}
