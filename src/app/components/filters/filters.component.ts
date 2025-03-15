import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  imports: [CommonModule]
})
export class FiltersComponent {
  profiles = ['Barcelona Bridal Fashion Week', 'Fashion Expo', 'Designer Showcase'];
  dateRanges = ['last 7 days', 'last 30 days', 'custom range'];
  sources = ['all sources', 'social media', 'news articles'];
  filters = ['no filters', 'only verified', 'high engagement'];
  sortingOptions = ['date', 'relevance', 'popularity'];
  folders = ['inbox', 'archived', 'favorites'];

  selectedProfile = this.profiles[0];
  selectedDateRange = this.dateRanges[0];
  selectedSource = this.sources[0];
  selectedFilter = this.filters[0];
  selectedSorting = this.sortingOptions[0];
  selectedFolder = this.folders[0];

  mentionsCount = 13632;
}
