import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
 import {Voyager} from '../voyager/voyager';
 import { Contentcomponent } from '../content/content';
import { RouterLink, RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-dashboard',
  imports: [Voyager,Contentcomponent,RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
