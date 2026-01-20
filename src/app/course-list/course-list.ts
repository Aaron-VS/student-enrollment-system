import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html'
})
export class CourseListComponent {

  courses: Course[] = [];

  constructor(private dataService: DataService) {
    this.courses = this.dataService.getCourses();
  }
}
