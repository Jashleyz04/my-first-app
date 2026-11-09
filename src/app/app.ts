import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Jose John T. Rivera Jr.';
  location = 'Guagua, Pampanga';
  email = 'riverajohn311@gmail.com';
  phone = '0991 560 2974';

  profile = 'I am a student that enjoys learning web development which led me to this course, I am also interested in many sports such as; football, basketball, and volleyball.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'PHP',
    'Java'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
