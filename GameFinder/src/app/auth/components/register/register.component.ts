import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User= new User();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  public register(){
    this.http.post<any>("http://localhost:8080/register",this.user).subscribe(data=>console.log(data));
  }
}
