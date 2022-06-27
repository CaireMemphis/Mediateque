
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formulaire-film',
  templateUrl: './formulaire-film.component.html',
  styleUrls: ['./formulaire-film.component.css']
})
export class FormulaireFilmComponent implements OnInit {
  
@Output() finish = new EventEmitter;

@Input() default?: any;

  form: FormGroup = new FormGroup({})

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      
      "nom": [this.default?.nom || ''],
      "real": [this.default?.real || ''],
      "synopsis":[this.default?.synopsis || ''],
      "annee": [this.default?.annee || ''],
      "img": [this.default?.img || ''],
      "details": [this.default?.details || '']
    })
  }

onSubmit(){
  this.finish.emit(this.form.value)
}

}
