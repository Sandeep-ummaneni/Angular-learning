import { Component } from '@angular/core';
import { Contentcomponent } from '../content/content';
import {Spacecraft} from '../spacecraft/spacecraft'
import { CommonModule } from '@angular/common';
import {Voyager} from '../voyager/voyager';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
 imports: [Contentcomponent,Spacecraft,CommonModule,Voyager,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

    header : string = "deep space tracker";
// 🚀
}
