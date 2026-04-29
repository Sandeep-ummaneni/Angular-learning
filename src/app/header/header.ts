import { Component } from '@angular/core';
import { Contentcomponent } from '../content/content';
import {Spacecraft} from '../spacecraft/spacecraft'
import { CommonModule } from '@angular/common';
import {Voyager} from '../voyager/voyager';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
 imports: [Contentcomponent,Spacecraft,CommonModule,Voyager,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

    header : string = "deep space tracker";
// 🚀
}
