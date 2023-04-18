import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  isAuthenticated: boolean=false;


  
  logout(){
    this.isAuthenticated=false;
    // console.log("logout: "+this.isAuthenticated);
  }
}
