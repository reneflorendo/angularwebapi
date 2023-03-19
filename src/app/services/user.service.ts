import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user:any){

  let users=[];
  let locStorage=localStorage.getItem('Users');
  if (locStorage){
    users=JSON.parse(locStorage);
    users=[user,...users]
  } else{
    users=[user];
  }

  localStorage.setItem('Users', JSON.stringify(users));
}
}
