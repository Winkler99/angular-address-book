import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contactsService = inject(ContactsService)
  route = inject(ActivatedRoute)
  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactsService.getContactById(Number(this.id))
}
