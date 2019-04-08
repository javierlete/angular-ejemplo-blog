import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../modelos/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get().subscribe(
      users => this.users = users
    );
  }

}
