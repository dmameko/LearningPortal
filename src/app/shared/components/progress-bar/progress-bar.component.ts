import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  imports: [
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {
  @Input() public progress: number = 0;
  @Input() public full: number = 0;

  public progressWidth: string = '';

  public ngOnInit(): void {
    this.progressWidth = this.countProgressWidth();
  }

  public countProgressWidth(): string {
    return ((100 * this.progress) / this.full).toString() + '%';
  }
}
