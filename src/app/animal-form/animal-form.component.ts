import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { animal } from '../models/animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {

  // VARIABLES
  form:animal = {
    id:0,
    name:'',
    lifespan:0,
    email:''
  }

  // METHODS
  // Method to submit form
  onSubmit(animalForm:NgForm):void {
    console.log('Animal entered: ', animalForm.value);
  }
  // Method to reset the form
  onReset(animalForm:NgForm):void {
    animalForm.reset();
  }

}
