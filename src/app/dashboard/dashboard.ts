import { Component } from '@angular/core';
 import {Spacecraft} from '../spacecraft/spacecraft'
// import { CommonModule } from '@angular/common';
 import {Voyager} from '../voyager/voyager';
 import { Contentcomponent } from '../content/content';
 

@Component({
  selector: 'app-dashboard',
  imports: [Voyager,Spacecraft,Contentcomponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
