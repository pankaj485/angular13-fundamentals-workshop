import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Node Js Fundamentals',
      description: 'Learn the fundamentals of Node Js',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 3,
      title: 'JS Fundamentals',
      description: 'Learn the fundamentals of JavaScript',
      percentComplete: 16,
      favorite: true,
    },
  ];

  selectedCourse = null;

  constructor() {}

  selectCourse(course) {
    this.selectedCourse = course;
  }

  removeCourse(courseId) {
    console.log('COURSE TO REMOVE: ', courseId);
  }

  ngOnInit(): void {}
}
