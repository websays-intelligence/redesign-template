import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule]
})
export class SidebarComponent {
  menuItems = [
    { label: 'Mentions', icon: 'chat' },
    { label: 'Communities', icon: 'groups' },
    { label: 'Comparisons', icon: 'bar_chart' },
    { label: 'Maps', icon: 'map' },
    { label: 'Reports', icon: 'description' }
  ];
}
