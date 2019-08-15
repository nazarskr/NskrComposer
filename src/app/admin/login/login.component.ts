import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ILogin } from '../../shared/interfaces';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

let enter = false;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  entrance: ILogin;
  adminLogin: string;
  adminPass: string;

  constructor(private loginService: LoginService,
              public router: Router) {
    this.getEntrance();
  }

  ngOnInit() {
  }

  private getEntrance(): void {
    this.loginService.getEntrance().subscribe(
      data => {
        this.entrance = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  login() {
    if (this.adminLogin === this.entrance.login && this.adminPass === this.entrance.password) {
      enter = true;
      this.adminLogin = '';
      this.adminPass = '';
      this.router.navigate(['admin']);
    } else {
      enter = false;
      this.adminLogin = '';
      this.adminPass = '';
      alert('ти не адмін, ти - мудак!');
      this.router.navigate(['хуй']);
    }
  }
}
export class AdminGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      return enter;
  }
}
