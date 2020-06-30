import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  login(dataForm:any){
this.userService.login(dataForm.userName,dataForm.password);
if(this.userService.isAuthenticated){
  this.userService.persistenceUser();
  this.router.navigateByUrl('');

}  }
}
