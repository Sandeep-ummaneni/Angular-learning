import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {VoyagerCard} from '../voyager-card/voyager-card';
@Component({
  selector: 'app-voyager',
  imports: [CommonModule,FormsModule,VoyagerCard],
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
    planetsFlyby: 'Visited Jupiter & Saturn',
    missionType: 'planetary',
    timeline: [
      {
        planet: 'Interstellar Space',
        icon: '✨',
        date: 'Aug 25, 2012',
        distanceKm: 0,
        discovery:
          'Became the first human-made object to enter interstellar space, crossing the heliopause and entering the region between stars.',
        status: 'Active',
      },
    ],
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
    planetsFlyby: 'Visited Uranus & Neptune',
    missionType: 'grandTour',
    timeline: [
      {
        planet: 'Interstellar Space',
        icon: '✨',
        date: 'Nov 5, 2018',
        distanceKm: 0,
        discovery:
          'Second human-made object to cross into interstellar medium, over 20 billion km from the Sun and still transmitting data.',
        status: 'Active',
      },
    ],
  },
];
  showDetails: boolean[] = [false, false];

  toggleDetails(index: number) {
  this.showDetails[index] = !this.showDetails[index];
  
   
}
}
