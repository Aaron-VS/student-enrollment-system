import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html'
})
export class StudentListComponent {

  students: Student[] = [];

  constructor(private dataService: DataService) {
    this.students = this.dataService.getStudents();
  }
}
