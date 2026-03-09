import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tour, getTourTransportDetails } from '../../models/tour.model';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent {
  tours: Tour[] = [
    { 
      id: 1, 
      name: 'Vienna Woods Hike', 
      distance: 15.5, 
      description: 'A beautiful trail through the hills.', 
      transport: { type: 'hike', difficultyLevel: 3 }, 
      reviews: [] 
    },
    { 
      id: 2, 
      name: 'Danube Bike Trail', 
      distance: 42.0, 
      description: 'Flat, paved path running alongside the river.', 
      transport: { type: 'bike', bikeType: 'road' }, 
      reviews: [] 
    }
  ];

  selectedTour: Tour | null = null;

  searchInput: string = '';

  get filteredTours(): Tour[] {
    if (!this.searchInput) {
      return this.tours;
    }
    const lowerCaseSearch = this.searchInput.toLowerCase();
    return this.tours.filter(tour => 
      tour.name.toLowerCase().includes(lowerCaseSearch)
    );
  }

  onSelectTour(tour: Tour): void {
    this.selectedTour = tour;
  }

  clearSelection(): void {
    this.selectedTour = null;
  }

  getDetails(tour: Tour): string {
    return getTourTransportDetails(tour);
  }
}