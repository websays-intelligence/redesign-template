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
  openMenu: string | null = null; // Tracks open menu
  selectedSubMenu: string | null = null; // Tracks active submenu

  sidebarItems = [
    {
      icon: 'bi-list',
      label: 'Mentions',
      route: '/mentions',
      children: [
        { label: 'Conversation Mode', route: '/conversation' },
        { label: 'Compact Mode', route: '/compact' },
      ]
    },
    { icon: 'bi-people', label: 'Communities', route: '/communities', children: [
      { label: 'Bloc Mode', route: '/bloc' },
      { label: 'Expanded Mode', route: '/expanded' }
   
    ] },
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
      this.openMenu = null; // Close menu if already open
      this.selectedSubMenu = null; // Reset submenu selection
    } else {
      this.openMenu = item.label; // Open clicked menu
      this.selectedSubMenu = null; // Reset submenu when switching menu
    }
  }

  selectSubMenu(label: string) {
    this.selectedSubMenu = label;
  }
}
