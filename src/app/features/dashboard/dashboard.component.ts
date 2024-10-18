import { Component } from "@angular/core";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { CourseItemComponent } from "../../shared/components/course-item/course-item.component";
import { courses } from "../../store/mocks/courses.mock";
import { ICourseItem } from "../../store/models/course-item.interface";
import { ProgressCalendarComponent } from "../../shared/components/progress-calendar/progress-calendar.component";
import { CourseCardComponent } from "../../shared/components/course-card/course-card.component";
import { ICourseCard } from "../../store/models/course-card.interface";
import { cards } from "../../store/mocks/course-cards.mock";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    BannerComponent,
    CourseItemComponent,
    ProgressCalendarComponent,
    CourseCardComponent,
],
})
export class DashboardComponent {
  public courses: ICourseItem[] = courses;
  public cards: ICourseCard[] = cards;
}
