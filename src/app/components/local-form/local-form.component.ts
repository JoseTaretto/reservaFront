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

  async onSubmit() {
    if (this.formNegocio.valid) {
      try {
        const formData = this.formNegocio.value;
        console.log(formData);
  
        const response = await fetch('http://localhost:3000/api/negocios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error(`Error al enviar los datos: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    } else {
      console.error('El formulario no es válido');
    }
  }
  
}
