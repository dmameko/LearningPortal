import { CourseItemStatus, ICourseItem } from "../models/course-item.interface";

export const courses: ICourseItem[] = [
  {
    id: '1',
    title: 'Ilmu Pertanian dan Biosistem',
    status: CourseItemStatus.QUIZ,
    progress: 40,
    fullAmount: 40,
    image: 'assets/images/courses/course1.png',
  },
  {
    id: '2',
    title: 'Kimia Organik untuk Pertanian',
    status: CourseItemStatus.IN_PROGRESS,
    progress: 20,
    fullAmount: 40,
    lastParagraph: '20. Object-oriented Programming on Dart',
    image: 'assets/images/courses/course2.png',
  }
];
