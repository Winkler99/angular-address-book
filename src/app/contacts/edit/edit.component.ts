import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup 
  formBuilder = inject(FormBuilder)
  contactsService = inject(ContactsService)
  router = inject(Router)

  route = inject(ActivatedRoute)
  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactsService.getContactById(Number(this.id))

  constructor(){
    
    console.log(this.contact)
    if(this.contact){
      this.contactForm = this.formBuilder.group({
        firstName: [this.contact.firstName, Validators.required],
        lastName: [this.contact.lastName, Validators.required],
        street: [this.contact.street, Validators.required],
        city: [this.contact.city, Validators.required],
      });
    }
    else{
      this.contactForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
      });
    }
    console.log(this.contactForm.value)
      
  }

  editContact(){

    this.contactsService.editContact(this.contactForm.value, Number(this.id))
    this.router.navigate(['contacts'])
  }
}
