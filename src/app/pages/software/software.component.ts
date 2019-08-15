import { Component } from '@angular/core';
import { IMyApps } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent {
  myApps: Array<IMyApps> = [
    {
      id: 1,
      link: 'freelancerApp',
      appImage: '../../../assets/images/fApp.png',
      name: 'FreelancerApp',
      description: 'Here is the best app for freelancers'
    },
    {
      id: 2,
      link: 'littleComposer',
      appImage: '../../../assets/images/lComposer.png',
      name: 'LittleComposer',
      description: 'Feel yourself as a composer right now'
    }
  ];

  constructor() { }


}
