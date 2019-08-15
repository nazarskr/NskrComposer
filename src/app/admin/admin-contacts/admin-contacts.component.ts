import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { IMessage } from '../../shared/interfaces';
import { Message } from '../../shared/classes';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.scss'],
  animations: [
    trigger('hideEdit', [
      state('hidden', style({
        opacity: 0,
        height: 0
      })),
      state('visible', style({
        opacity: 1,
        height: '333px'
      })),
      transition('hidden => visible', [
        animate('.5s')
      ]),
      transition('visible => hidden', [
        animate('.5s')
      ]),
    ])
  ]
})
export class AdminContactsComponent implements OnInit {
  messages: Array<IMessage>;
  messageId: number;
  messageDate: string;
  messageName: string;
  messageMail: string;
  messageText: string;
  isEditHidden = true;
  constructor(private contactService: ContactService) {
    this.getMessages();
  }

  ngOnInit() {
  }
  private getMessages(): void {
    this.contactService.getMessages().subscribe(
      data => {
        this.messages = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public editMessage(message: IMessage): void {
    this.messageId = message.id;
    this.messageDate = message.date;
    this.messageName = message.name;
    this.messageMail = message.mail;
    this.messageText = message.text;
    this.isEditHidden = false;
  }
  public saveMessage(): void {
    const newMessage = new Message (
      this.messageId, this.messageDate, this.messageName, this.messageMail, this.messageText
    );
    this.contactService.updateMessage(newMessage).subscribe(() => {
      this.getMessages();
    });
    this.messageId = null;
    this.messageDate = '';
    this.messageName = '';
    this.messageMail = '';
    this.messageText = '';
    this.isEditHidden = true;
  }
  public deleteMessage(message: IMessage): void {
    const { id } = message;
    this.contactService.delMessage(id).subscribe(() => {
      this.getMessages();
    });
  }
  closeEditWindow() {
    this.isEditHidden = true;
  }
}
