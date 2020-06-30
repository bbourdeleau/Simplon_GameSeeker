import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private users=[
    {userName:'admin',password:'admin',email:'ss@gmail.com',roles:['ROLE_ADMIN','ROLE_USER']},
    {userName:'user',password:'user',email:'uu@gmail.com',roles:['ROLE_USER']},
    {userName:'modo',password:'modo',email:'mm@gmail.com',roles:['ROLE_ADMIN']}
  ]
  public isAuthenticated:boolean;
  public userAutenticated;
  public token:string;
  constructor(private http:HttpClient) { }

  public registration(user){
    return this.http.post<any>("http://localhost:8080/register",user),
    console.log(user);
  }
  public login(userName:string,password:string){
    let user;
    this.users.forEach(element => {
      if(element.userName==userName && element.password==password){
        user=element;
        this.token=btoa(JSON.stringify({userName:element.userName,roles:element.roles}));
      }
    });
    if(user){
      this.isAuthenticated=true;
      this.userAutenticated=user;
      alert('Vous êtes connecté')
    }
  }
  public isAdmin(){
    if(this.userAutenticated){
      if (this.userAutenticated.roles.indexOf('ROLE_ADMIN')>-1){
        return true;
      }
      return false;
    }
  }
  public isUser(){
    if(this.userAutenticated){
      if (this.userAutenticated.roles.indexOf('ROLE_USER')>-1){
        return true;
      }
      return false;
    }
  }
  public persistenceUser(){
    if(this.userAutenticated){
      localStorage.setItem('authToken',this.token);
    }
  }
  public loadPersistentUser(){
    let t=localStorage.getItem('authToken');
    if(t){
    let user=JSON.parse(atob(t));
    this.userAutenticated={userName:user.userName,roles:user.roles};
    this.isAuthenticated=true;
    this.token=t;
  }
}

public removePersistentUser(){
  localStorage.removeItem('authToken');
  this.isAuthenticated=false;
  this.userAutenticated=undefined;
  this.token=undefined;
}
}
