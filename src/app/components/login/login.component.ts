import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InitializeUserLogin: Login[] = [];
  userLogin: Login = new Login();

  constructor() { }

  ngOnInit() {
    this.InitializeUserNameandPassword();
  }

  InitializeUserNameandPassword()
  {
    this.InitializeUserLogin.push(
    { Username: 'hammadbhatti.cs@gmail.com', Password: '123' },
    { Username: 'zohaibsaeed.cs@gmail.com', Password: '123' },
    { Username: 'muhammadusmanali.df@gmail.com', Password: '123' },
    { Username: 'umairali.cs@hotmail.com', Password: '123' },
    )
  }

  LoggedInByUserId()
  {
    let userloggedinstatus = this.InitializeUserLogin.filter(e => e.Username == this.userLogin.Username && e.Password == this.userLogin.Password);
    if(userloggedinstatus !== undefined && userloggedinstatus != null && userloggedinstatus.length > 0)
    {
      alert("Welcome to our project");
    }
    
  }
}
