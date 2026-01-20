import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-enroll-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enroll-student.html'
})
export class EnrollStudentComponent {

  studentId!: number;
  courseId!: number;

  constructor(private dataService: DataService) {}

  enroll() {
    this.dataService.enrollStudent({
      studentId: this.studentId,
      courseId: this.courseId
    });
    alert('Student Enrolled Successfully!');
  }
}
