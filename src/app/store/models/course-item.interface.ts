export interface ICourseItem {
  id: string;
  title: string;
  image: string;
  status: CourseItemStatus;
  progress: number;
  fullAmount: number;
  lastParagraph?: string;
}

export enum CourseItemStatus {
  QUIZ = 'Quiz',
  IN_PROGRESS = 'In Progress',
  NEW = 'New',
  DONE = 'Finished',
}
