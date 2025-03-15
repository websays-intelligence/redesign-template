import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false;
  openMenu: string | null = null;
  selectedSubMenu: string | null = null;

  sidebarItems = [
    {
      icon: 'bi-list',
      label: 'Mentions',
      route: '/mentions',
      children: [
        { icon: 'bi-chat-left-text', label: 'Conversation Mode', route: '/conversation' },
        { icon: 'bi-grid-3x3-gap', label: 'Compact Mode', route: '/compact' },
        { icon: 'bi-columns', label: 'Bloc Mode', route: '/bloc' },
        { icon: 'bi-square', label: 'Expanded Mode', route: '/expanded' }
      ]
    },
    { icon: 'bi-people', label: 'Communities', route: '/communities', children: [] },
    { icon: 'bi-bar-chart', label: 'Comparisons', route: '/comparisons', children: [] },
    { icon: 'bi-geo-alt', label: 'Maps', route: '/maps', children: [] },
    { icon: 'bi-graph-up', label: 'Reports', route: '/reports', children: [] }
  ];

  footerItems = [
    { icon: 'bi-gear', label: 'Settings', route: '/settings' },
    { icon: 'bi-box-arrow-right', label: 'Logout', route: '/logout' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMenu(item: any) {
    if (this.openMenu === item.label) {
      this.openMenu = null;
      this.selectedSubMenu = null;
    } else {
      this.openMenu = item.label;
      this.selectedSubMenu = null;
    }
  }

  selectSubMenu(label: string) {
    this.selectedSubMenu = label;
  }
}
