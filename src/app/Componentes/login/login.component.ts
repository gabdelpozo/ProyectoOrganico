import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicio/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.setShowLogin(false);
    const user = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe(data => {
      console.log(data);
    });
  }

  prueba2(){
    this.loginService.prueba().subscribe(info => {
      console.log(info)
    });
  }

  ingresar(){
    this.router.navigateByUrl('/productos')
  }

}
