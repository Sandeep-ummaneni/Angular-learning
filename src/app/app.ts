import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { RouterModule } from '@angular/router'; 
import { Dashboard } from './dashboard/dashboard';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterModule,Dashboard], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Space_mission_tracker');
  
}
