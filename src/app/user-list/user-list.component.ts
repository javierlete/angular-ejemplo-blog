import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../modelos/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get().subscribe(
      users => this.users = users
    );

    //PRIMER DESGLOSE
    //this.userService.get().subscribe(
    //  function(users: User[]): User[] {
    //    return this.users = users;
    //  }
    //);

    //SEGUNDO DESGLOSE
    //this.userService.get().subscribe(
    //  transferirUsuarios
    //);

    //SEGUNDO DESGLOSE
    //function transferirUsuarios(users: User[]): User[] {
    //  return this.users = users;
    //}
    //TRADUCCIÓN A LENGUAJE C# O JAVA
    //User[] transferirUsuarios(User[] users)
  }

}
