import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit{
  constructor(private auth: AuthService){}
    
  loanRequests: Loan[] = [];
  isAuthenticated: boolean=false;

  ngOnInit(): void {
    this.auth.check1((isAuthenticated) => {
      if (isAuthenticated) {
        this.isAuthenticated=true;
      } else {
        this.isAuthenticated=false;
      }
    });
    this.getlist(); //add list here

  }
  getlist() {
      //add list
    this.loanRequests = [
      {
        loanID: 1,
        BO: 1234,
        date: new Date('2023-04-20'),
        amount: 10000,
        status: 'Pending'
      },
      {
        loanID: 2,
        BO: 5678,
        date: new Date('2023-04-21'),
        amount: 15000,
        status: 'Approved'
      },
      {
        loanID: 3,
        BO: 9012,
        date: new Date('2023-04-22'),
        amount: 20000,
        status: 'Rejected'
      }
    ];
  
  
  }

  
  acceptRequest(request: Loan): void {
    request.status='Approved'
    // TODO: Implement accept request logic here
  }

  rejectRequest(request: Loan): void {
    request.status='Rejected'
    // TODO: Implement reject request logic here
  }
 
}
