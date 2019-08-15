import { Component, OnInit } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  animations: [
    trigger('fixedMenu', [
      state('static', style({
        background: 'black',
        color: 'white',
      })),
      state('scroll', style({
        background: 'white',
        color: 'black',
      })),
      transition('static => scroll', [
        animate('1s')
      ]),
      transition('scroll => static', [
        animate('1s')
      ]),
    ]),
    trigger('fixedLink', [
      state('static', style({
        color: 'white',
      })),
      state('scroll', style({
        color: 'black'
      })),
    ]),
    trigger('fixedIcon', [
      state('static', style({
        filter: 'invert(100%)'
      })),
      state('scroll', style({
        filter: 'invert(0%)'
      })),
    ]),
    trigger('scrollButton', [
      state('static', style({
        opacity: 0,
      })),
      state('scroll', style({
        opacity: 1
      })),
      transition('static => scroll', [
        animate('1s')
      ]),
      transition('scroll => static', [
        animate('.5s')
      ]),
    ]),
    trigger('moveMenu', [
      state('static', style({
        top: '20px',
      })),
      state('scroll', style({
        top: 0,
        left: '-6px'
      })),
      transition('static => scroll', [
        animate('1s')
      ]),
      transition('scroll => static', [
        animate('1s')
      ]),
    ]),
    trigger('showMenu', [
      state('opened', style({
        zIndex: 9999
      })),
      state('closed', style({
        zIndex: 0
      })),
    ]),
    trigger('showLabel', [
      state('static', style({
      })),
      state('scroll', style({
        display: 'none'
      })),
    ]),
    trigger('showIdentifier', [
      state('static', style({
        right: 0,
        opacity: 1
      })),
      state('scroll', style({
        right: '-300px',
        opacity: 0
      })),
      transition('static => scroll', [
        animate('2s')
      ]),
      transition('scroll => static', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScroll = false;
  isBigScroll = false;
  isSmall = null;
  open = false;
  identifier = 'Home';

  constructor(private scrollDispatcher: ScrollDispatcher,
              public breakpointObserver: BreakpointObserver,
              private router: Router,
              private location: Location) {
      this.router.events.subscribe(() => {
        const link = this.location.path() as string;
        const name = link[1].toUpperCase() + link.slice(2, link.length);
        document.getElementById('navIdentifier').innerText = name;
      });
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmall = true;
        } else {
          this.isSmall = false;
        }
      });
  }
  fixedScroll() {
    this.scrollDispatcher.scrolled().subscribe(x =>  {
      if (window.scrollY > 50) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
      if (window.scrollY > 300) {
        this.isBigScroll = true;
      } else {
        this.isBigScroll = false;
      }
    });
  }
  openMenu() {
    const list = document.querySelectorAll('.dr-menu');
    if (!this.open) {
      list.forEach(el => {
        el.classList.add('dr-menu-open');
      });
      this.open = true;
    } else if (this.openMenu) {
      this.open = false;
      list.forEach(el => {
        el.classList.remove('dr-menu-open');
      });
      return false;
    }
  }
  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

