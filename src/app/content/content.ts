import { Component } from '@angular/core';
import {Voyager} from '../voyager/voyager';
@Component({ 
  selector: 'app-content',
  standalone : true,
   imports: [Voyager],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Contentcomponent {

}
