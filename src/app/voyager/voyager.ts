import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-voyager',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './voyager.html',
  styleUrl: './voyager.css',
})
export class Voyager {
  voyagers = [
  {
    id: 'v1',
    name: 'Voyager 1',
    launched: '1977-09-05',
    status: 'Active',
    location: 'Interstellar space',
    distanceAU: '163.6 AU',
    speed: '17.0 km/s',
    powerLeft: '~249 W',
    mission: 'Planetary flyby → ISM study',
    planetsflyby:'Visited Jupiter & Saturn',

  },
  {
    id: 'v2',
    name: 'Voyager 2',
    launched: '1977-08-20',
    status: 'Active',
    location: 'Interstellar space',
    distanceAU: '135.7 AU',
    speed: '15.4 km/s',
    powerLeft: '~233 W',
    mission: 'Grand Tour → ISM study',
    planetsflyby:'Visited Uranus & Neptune',
  }
  ]

  showDetails: boolean[] = [false, false];

  toggleDetails(index: number) {
  this.showDetails[index] = !this.showDetails[index];


}
}

