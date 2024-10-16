import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class SidebarComponent implements OnInit {
  public sidebarItems = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      icon: 'clipboard',
      active: false,
    },
    {
      title: 'Explore',
      route: '/explore',
      icon: 'compass',
      active: false,
    },
    {
      title: 'My learning',
      route: '/learning',
      icon: 'bookmark',
      active: false,
    },
    {
      title: 'Settings',
      route: '/settings',
      icon: 'user',
      active: false,
    },
  ];

  public ngOnInit(): void {
    
  }
}
