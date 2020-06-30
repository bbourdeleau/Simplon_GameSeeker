import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user:string;
  constructor( private router:Router,public userService:UserServiceService){}
  
  ngOnInit(): void {
    this.userService.loadPersistentUser();
    this.user=this.userService.userAutenticated.userName;
  }
  title = 'GameFinder';
  logout(){
    this.userService.removePersistentUser();
    console.log("vous etes déconnecté");
  }
}
