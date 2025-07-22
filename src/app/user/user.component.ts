import {Component, computed, EventEmitter, input, Input, Output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

// const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Below is the normal approach to accept the input from other component
  @Input({required: true}) id!: string;
  @Input({required: true}) avtar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter()

  //with signal below code
  /* avtar = input<string>()
   name = input<string>()

   imagePath = computed(() => 'assets/users/' + this.avtar())*/

  // Without signals we can use directly below code but we need to change if we use signals
  get imagePath() {
    return "assets/users/" + this.avtar
  }


  onSelectUser() {
    this.select.emit(this.id)
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
