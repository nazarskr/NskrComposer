import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { IMessage } from '../../shared/interfaces';
import { Message } from '../../shared/classes';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
  messages: Array<IMessage>;
  messageDate: string;
  messageName: string;
  messageMail: string;
  messageText: string;

  constructor(private contactService: ContactService) {
    this.getMessages();
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
  public sendMessage(): void {
    const getId = x => document.getElementById(x) as HTMLInputElement;
    const newId = this.messages[this.messages.length - 1].id + 1;
    this.messageDate = formatDate(new Date());
    this.messageName = getId('messageName').value;
    this.messageMail = getId('messageMail').value;
    this.messageText = getId('messageText').value;
    const newMessage = new Message (
      newId, this.messageDate, this.messageName, this.messageMail, this.messageText
    );
    this.contactService.addMessage(newMessage).subscribe(() => {
      this.getMessages();
    });
    getId('messageName').value = '';
    getId('messageMail').value = '';
    getId('messageText').value = '';
  }
}
function formatDate(date) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];
  const obj = {
      day: date.getDate(),
      monthIndex: date.getMonth(),
      year: date.getFullYear(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
  };
  if (obj.day < 10) {
    obj.day = '0' + obj.day;
  }
  if (obj.hours < 10) {
    obj.hours = '0' + obj.hours;
  }
  if (obj.minutes < 10) {
    obj.minutes = '0' + obj.minutes;
  }
  if (obj.seconds < 10) {
    obj.seconds = '0' + obj.seconds;
  }
  return obj.day + ' ' + monthNames[obj.monthIndex] + ' ' + obj.year + ', ' + obj.hours + ':' + obj.minutes + ':' + obj.seconds;
}
