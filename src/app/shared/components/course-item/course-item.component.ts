import { Component, Input } from "@angular/core";
import { CourseItemStatus, ICourseItem } from "../../../store/models/course-item.interface";
import { CommonModule } from "@angular/common";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

@Component({
  standalone: true,
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  imports: [
    CommonModule,
    ProgressBarComponent,
  ],
})
export class CourseItemComponent {
  @Input() public course!: ICourseItem;

  public courseStatuses = CourseItemStatus;
}
