import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Below is traditional way to create object that angular listen when any chagne use zone.js
  // selectedUser = DUMMY_USERS[randomIdx]
  // New way to create signals
  selectedUser = signal(DUMMY_USERS[randomIdx])

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  // Using old approach
  // get imagePath() {
  //   return "assets/users/" + this.selectedUser().name
  // }


  onSelectUser() {
    const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIdx])
    // this.selectedUser = DUMMY_USERS[randomIdx]
  }
}
