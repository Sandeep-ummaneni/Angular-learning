import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import {Voyager} from '../voyager/voyager';
@Component({ 
  selector: 'app-content',
  standalone : true,
   imports: [Voyager],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Contentcomponent {


  @ContentChild('v1') v1!: ElementRef;
  @ContentChild('v2') v2!: ElementRef;

  ngAfterContentInit() {
    if (this.v1 && this.v2) {
    this.v1.nativeElement.style.color = '#00d4ff';
    this.v2.nativeElement.style.color = '#ff7b00';
  }
  
}
}
