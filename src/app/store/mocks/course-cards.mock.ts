import { ICourseCard } from "../models/course-card.interface";

export const cards: ICourseCard[] = [
  {
    id: '1',
    title: 'Ergonomi Pertanian dan Keselamatan Kerja',
    image: 'assets/images/cards/card1.png',
    tutorImage: 'assets/images/tutors/tutor1.svg',
    tutorName: 'Jack Harper',
    rate: '4.8',
    reviews: 997,
    bestSeller: true,
  },
  {
    id: '2',
    title: 'Ilmu Mekanika Fluida',
    image: 'assets/images/cards/card2.png',
    tutorImage: 'assets/images/tutors/tutor2.svg',
    tutorName: 'Ramy Malek',
    rate: '4.6',
    reviews: 797,
    bestSeller: true,
  },
  {
    id: '3',
    title: 'Pengetahuan Sistem Kontrol',
    image: 'assets/images/cards/card3.png',
    tutorImage: 'assets/images/tutors/tutor3.svg',
    tutorName: 'Jacob Sianturi',
    rate: '4.7',
    reviews: 687,
    bestSeller: true,
  }
];
