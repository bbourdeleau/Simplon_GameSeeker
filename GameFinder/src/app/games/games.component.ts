import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { games } from '../games';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public games:games= new games;
  public game;
  SearchForm: FormGroup;
  research:string;
  editingGame: boolean;
  selectedGame: any;
  selectedFile: any;
  progress: number;
  currentFileUpload: any;


  constructor(public gameService:GameService,public userService:UserServiceService,public http:HttpClient) { 

    this.SearchForm = new FormGroup({
      'research': new FormControl('', [
        Validators.required
      ])
    });

  }

  ngOnInit(): void {
    this.getGames();
  }
  private getGames() {
    if (!this.research){
    this.gameService.getResources("/gameses")
    .subscribe(data=>{
      this.game = data;
      console.log(data)
    },err=>{
      console.log(err)
    })
  }else {
    this.Search(this.research)
  }
  }

public Search(research){
  this.gameService.getResources("/gameses/search/genre?mc="+research)
  .subscribe(data=>{
    this.game = data;
    console.log(data)
  },err=>{
    console.log(err)
  })
}
public editGame(){
  this.http.post<any>("http://localhost:8080/update/"+this.selectedGame.id,this.game).subscribe(data=>console.log(data));

}
public selectGame(g){
  this.editingGame=true;
  this.selectedGame=g;
  this.games=this.game;
  console.log(this.selectedGame);
}
public onSelectedFile(event){
  this.selectedFile=event.target.files;
}

public upload(){

  this.progress = 0;
  this.currentFileUpload = this.selectedFile.item(0)
  this.gameService.uploadData(this.currentFileUpload,this.selectedGame.id).subscribe(event => {
    if(event.type === HttpEventType.UploadProgress){
      this.progress = Math.round(100* event.loaded /event.total);
    } else if(event instanceof HttpResponse){
      
    }
  },err => {
    console.log(err);
  });
  this.editGame();

}
getTS(){
  return Date.now();
}
}
