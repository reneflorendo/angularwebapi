import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:User){
  let UserArray:User[]=[];

  if (localStorage.getItem('Users'))
  {
    let users=localStorage.getItem('Users');
    if (users!=null){
      UserArray=JSON.parse(users);
    }

  }

  return UserArray.find(p => p.userName===user.userName && p.password ===user.password);
}

}
