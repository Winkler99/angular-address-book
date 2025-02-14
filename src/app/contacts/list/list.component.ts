import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(ContactsService);
  contacts: Contact[] = this.contactService.getAllContacts();
}
