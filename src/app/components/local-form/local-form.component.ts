import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-local-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './local-form.component.html',
  styleUrl: './local-form.component.css'
})
export class LocalFormComponent {

formNegocio: FormGroup;

  constructor (private form: FormBuilder){
    this.formNegocio = this.form.group({
      name:['', Validators.required],
      horario:['',Validators.required],
      img: ['']
    })
  }

  onSubmit() {
  console.log(this.formNegocio);
  }

}
