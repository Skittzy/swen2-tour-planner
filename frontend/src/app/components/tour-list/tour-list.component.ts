import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tour, getTourTransportDetails } from '../../models/tour.model';
import { UserReviewComponent } from '../user-review/user-review.component';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [NgClass, FormsModule, UserReviewComponent],
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
      reviews: [
        { 
          user: { id: 101, username: 'Matej Krsteski' },
          rating: 5, 
          description: 'Amazing views! A bit muddy after the rain, though.' 
        },
        { 
          user: { id: 102, username: 'Anna Müller' }, 
          rating: 4, 
          description: 'Good elevation gain. Definitely wear proper boots.' 
        },
        { 
          user: { id: 101, username: 'John' }, 
          rating: 2, 
          description: 'I dont like to hike...' 
        }
      ] 
    },
    { 
      id: 2, 
      name: 'Danube Bike Trail', 
      distance: 42.0, 
      description: 'Flat, paved path running alongside the river.', 
      transport: { type: 'bike', bikeType: 'road' }, 
      reviews: [
        { 
          user: { id: 101, username: 'Matej Krsteski' }, 
          rating: 5, 
          description: 'Perfect asphalt all the way. Great for speed!' 
        }
      ] 
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