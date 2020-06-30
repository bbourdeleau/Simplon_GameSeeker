import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { games } from '../games';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  game:games = new games();
  constructor(public userService:UserServiceService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  public addGame(){
    this.http.post<any>("http://localhost:8080/addGame",this.game).subscribe(data=>console.log(data));
  }
  
}
