import { Component, Input } from "@angular/core";
import { ICourseCard } from "../../../store/models/course-card.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  imports: [
    CommonModule,
  ],
})
export class CourseCardComponent {
  @Input() public course!: ICourseCard;
}
