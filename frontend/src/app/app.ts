import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TourListComponent } from "./components/tour-list/tour-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TourListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tour-planner-frontend');
}
