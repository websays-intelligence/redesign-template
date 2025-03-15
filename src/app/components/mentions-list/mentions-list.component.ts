import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentions-list',
  standalone: true,
  templateUrl: './mentions-list.component.html',
  styleUrls: ['./mentions-list.component.scss'],
  imports: [CommonModule]
})
export class MentionsListComponent {
  mentions = [
    {
      username: '@ArabiaWeddings',
      followers: 4428,
      date: '22 Jan 2025',
      time: '10:00 AM',
      image: 'assets/mention1.jpg',
      text: 'Barcelona Bridal Fashion Week 2025 Prepares Huge Edition',
      hashtags: ['#BridalFashionWeek', '#BarcelonaBridalWeek'],
    },
    {
      username: '@ogadenia_couture',
      followers: 3606,
      date: '4 Feb 2025',
      time: '10:28 AM',
      image: 'assets/mention2.jpg',
      text: 'Pasarela SIMOF de Sevilla OGADENIA Couture',
      hashtags: ['#FashionTrends', '#RedCarpetStyle'],
    }
  ];
}
