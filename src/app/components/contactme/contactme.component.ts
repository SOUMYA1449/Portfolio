import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],  // Import ReactiveFormsModule here
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {
  log ='@'
  email: string = 'soumyaranjanmishra1449@gmail.com';
}
