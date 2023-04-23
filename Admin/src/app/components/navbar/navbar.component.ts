import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth: AuthService){}
  isAuthenticated: boolean=true;
 ///  isAuthenticated: boolean=this.auth.isAuthenticated;

  logout() {
    this.auth.isAuthenticated=false;
   
  }
  

}



