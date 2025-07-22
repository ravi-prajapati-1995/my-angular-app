import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

// const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avtar!:string;
  @Input({required: true}) name!:string;
  get imagePath() {
    return "assets/users/" + this.avtar
  }


  onSelectUser() {
  }
}


/*
// Below is traditional way to create object that angular listen when any chagne use zone.js
// selectedUser = DUMMY_USERS[randomIdx]
// New way to create signals

/!* // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)*!/
// Using old approach
get imagePath() {
  return "assets/users/" + this.avtar
}


onSelectUser() {
// const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length)
// this.selectedUser.set(DUMMY_USERS[randomIdx])
// this.selectedUser = DUMMY_USERS[randomIdx]
*/
