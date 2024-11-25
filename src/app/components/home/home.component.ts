import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';  // Import Typed.js

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skill: string[] = ["Web Developer .", "Java Developer .","Full Stack Developer ."]; // Array of skills
  currentSkill: string = '';  // Used for displaying the current skill
  typingSpeed: number = 150;  // Typing speed in ms
  deletingSpeed: number = 100; // Deleting speed in ms
  pauseDuration: number = 1000; // Pause duration after each skill

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect(): void {
    const options = {
      strings: this.skill, // Dynamic strings from the skill array
      typeSpeed: this.typingSpeed,
      backSpeed: this.deletingSpeed,
      backDelay: this.pauseDuration,
      startDelay: 500,
      loop: true,  // Make it loop through the skills
      showCursor: true,
      contentType: 'text',  // Set to 'text' as no HTML content is used in this case
    };

    // Initialize Typed.js with the given options
    new Typed('#typedElement', options);
  }
}
