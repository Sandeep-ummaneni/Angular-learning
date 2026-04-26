import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voyager-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voyager-card.html',
  styleUrl: './voyager-card.css',
})
export class VoyagerCard implements AfterViewInit {

  @Input({ required: true }) timeline: any[] = [];
  @Input() selectedPlanet: string | null = null;
  @Output() missionSelect = new EventEmitter<any>();

  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit() {
    
    console.log('Timeline loaded:', this.timeline); 
  }

  onSelectMission(mission: any) {
    this.missionSelect.emit(mission);
  }
 
}