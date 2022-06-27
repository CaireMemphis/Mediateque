
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formulaire-film',
  templateUrl: './formulaire-film.component.html',
  styleUrls: ['./formulaire-film.component.css']
})
export class FormulaireFilmComponent implements OnInit {
  
@Output() finish = new EventEmitter;

  form: FormGroup = new FormGroup({})

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      "id":[''],
      "nom": [''],
      "real": [''],
      "synopsis":[''],
      "annee": [''],
      "img": [''],
      "details": ['']
    })
  }

onSubmit(){
  this.finish.emit(this.form.value)
}

}
