import { Component } from '@angular/core';
 import {Spacecraft} from '../spacecraft/spacecraft'
// import { CommonModule } from '@angular/common';
 import {Voyager} from '../voyager/voyager';
 import { Contentcomponent } from '../content/content';
 import { Imagecomponent } from '../imagecomponent/imagecomponent';


@Component({
  selector: 'app-dashboard',
  imports: [Voyager,Spacecraft,Contentcomponent,Imagecomponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
