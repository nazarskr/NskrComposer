import { Component, OnInit, OnDestroy} from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('homeBlock', [
      state('static', style({
        position: 'static',
        background: 'rgba(255, 255, 255, 0.8)',
        color: 'black'
      })),
      state('scroll', style({
        position: 'fixed',
        top: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      })),
      transition('static => scroll', [
        animate('3s')
      ]),
      transition('scroll => static', [
        animate('3s')
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isScroll = false;
  hello = null;
  allAbout = null;
  typewriter = null;
  count = 0;
  private audioContext: AudioContext;
  private loadingSample = false;
  private audioBuffer: AudioBuffer;
  constructor(private scrollDispatcher: ScrollDispatcher) {}
  ngOnInit() {
    this.audioContext = new AudioContext();
    this.loadingSample = true;
    this.fetchSample()
        .then(audioBuffer => {
            this.loadingSample = false;
            this.audioBuffer = audioBuffer;
        })
        .catch(error => {throw error; });
    this.hello = setTimeout(() => this.typewriter = setInterval(() => {
      this.sayHello();
    }, 77), 3000);
  }
  ngOnDestroy() {
    clearTimeout(this.hello);
    clearInterval(this.typewriter);
    this.count = 0;
  }
  fetchSample(): Promise<AudioBuffer> {
    return fetch('../../../assets/songs/typewriter6.wav')
      .then(response => response.arrayBuffer())
      .then(buffer => {
          return new Promise((resolve, reject) => {
              this.audioContext.decodeAudioData(
                  buffer,
                  resolve,
                  reject
              );
          });
      });
  }
  playSample() {
    const bufferSource = this.audioContext.createBufferSource();
    bufferSource.buffer = this.audioBuffer;
    bufferSource.connect(this.audioContext.destination);
    bufferSource.start(0);
  }
  fixedScroll() {
    this.scrollDispatcher.scrolled().subscribe(x =>  {
      if (window.scrollY > 0) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    });
  }
  sayHello() {
    const text = 'Hi!  My name is Nazar.  I am composer and frontend developer based in Lviv, Ukraine';
    if (this.count < text.length) {
      document.getElementById('sayHello').innerHTML += text.charAt(this.count);
      if (text.charAt(this.count) !== ' ') {
        this.playSample();
      }
      this.count++;
    }
  }
}

