import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { games } from './games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getResources(url){
    return this.http.get(this.host+url)
  }
  public addGame(games){
    return this.http.post(this.host+"/addGames/",games);
  }
    uploadData(file: File, id): Observable<HttpEvent<{}>> {
    let formData: FormData = new FormData();
    formData.append('file',file);
    const req = new HttpRequest('POST',this.host+'/upload/'+id,formData, {
      reportProgress:true,
      responseType:'text',
    });
    return this.http.request(req);
  }

}
