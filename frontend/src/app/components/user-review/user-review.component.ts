import { Component, Input } from '@angular/core';
import { Review } from '../../models/tour.model';

@Component({
  selector: 'app-user-review',
  standalone: true,
  template: `
    <div class="w-full max-w-md mx-auto md:max-w-none bg-white border rounded-lg p-4 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center gap-3 mb-3 border-b pb-2">
          <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
            {{ review.user.username.charAt(0).toUpperCase() }}
          </div>
          <span class="font-bold text-gray-800">{{ review.user.username }}</span>
        </div>

        <div class="flex items-center justify-between mb-2">
          <span class="font-bold text-gray-700 text-sm">Rating</span>
          <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
            ★ {{ review.rating }} / 5
          </span>
        </div>
        <p class="text-sm text-gray-600 italic">"{{ review.description }}"</p>
      </div>
    </div>
  `
})
export class UserReviewComponent {
  // @Input() -> parent will give this data
  @Input({ required: true }) review!: Review;
}