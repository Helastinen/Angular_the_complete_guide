import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
  
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.counterService.CounterIncremented.emit();
  }
}
