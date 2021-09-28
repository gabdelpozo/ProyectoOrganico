import { Component, OnInit } from '@angular/core';
import { LoginService } from './servicio/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'proyectoOrganico';

  login: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.login = this.loginService.getShowLogin();
  }
  
}

