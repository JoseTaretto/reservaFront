import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-local-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.css'] // Cambiado a 'styleUrls'
})
export class LocalFormComponent {
  formNegocio: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formNegocio = this.formBuilder.group({
      name: ['', Validators.required],
      horario: ['', Validators.required],
      img: [''],
    });
  }

  onSubmit() {
    if (this.formNegocio.valid) {
      
      const formData = this.formNegocio.value; // Obtén los valores del formulario

      fetch('http://localhost:3000/routerNegocio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envía los datos del formulario como JSON
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al enviar los datos al servidor');
          }
          return response.json();
        })
        .then(data => {
          console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
          console.error('Error al enviar el formulario:', error);
        });
    } else {
      console.error('El formulario no es válido');
    }
  }
}
