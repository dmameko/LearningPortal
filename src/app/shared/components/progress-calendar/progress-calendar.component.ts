import { Component, OnInit } from '@angular/core';
import { ProgressCalendarService } from '../../services/progress-calendar.service';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-progress-calendar',
  templateUrl: './progress-calendar.component.html',
  styleUrls: ['./progress-calendar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
  ]
})
export class ProgressCalendarComponent implements OnInit {
  public progressData: number[] = [];
  public weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public progressLevels = [0, 1, 2, 3, 4];
  public selectedMonth: string = 'October';
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private progressCalendarService: ProgressCalendarService) {}

  public ngOnInit(): void {
    this.loadProgressData();
  }

  public loadProgressData(): void {
    this.progressCalendarService.getMockProgressData().subscribe(data => {
      this.progressData = data;
    });
  }

  public onMonthChange(newMonth: string): void {
    this.selectedMonth = newMonth;
    this.loadProgressData();
  }

  public getProgressClass(progress: number): string {
    switch (progress) {
      case 0: return 'progress-low';
      case 1: return 'progress-level-1';
      case 2: return 'progress-level-2';
      case 3: return 'progress-high';
      case 4: return 'progress-full';
      default: return '';
    }
  }

  public levelLabel(level: number): string {
    switch (level) {
      case 0: return 'Low';
      case 1: return 'Level 1';
      case 2: return 'Level 2';
      case 3: return 'High';
      case 4: return 'Full';
      default: return '';
    }
  }
}
