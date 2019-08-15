import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-freelancer-app',
  templateUrl: './freelancer-app.component.html',
  styleUrls: ['./freelancer-app.component.scss']
})
export class FreelancerAppComponent implements OnInit {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapPlaylist: Track[] = [
    {
      title: 'Benjamin Clementine - London',
      link: '../../../assets/songs/London.mp3'
    },
    {
      title: 'Radiohead - Burn the Witch',
      link: '../../../assets/songs/Burn the Witch.mp3'
    },
    {
      title: 'Alexandre Desplat - Bathilda Bagshot',
      link: '../../../assets/songs/Bathilda Bagshot.mp3'
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
