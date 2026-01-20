import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private students: Student[] = [
    { id: 1, name: 'Rahul Kumar', email: 'rahul@gmail.com', department: 'CSE' },
    { id: 2, name: 'Anita Sharma', email: 'anita@gmail.com', department: 'ECE' },
    { id: 3, name: 'Vikram Singh', email: 'vikram@gmail.com', department: 'MECH' },
    { id: 4, name: 'Sneha Nair', email: 'sneha@gmail.com', department: 'IT' },
    { id: 5, name: 'Arjun Reddy', email: 'arjun@gmail.com', department: 'CIVIL' },
    { id: 6, name: 'Meera Das', email: 'meera@gmail.com', department: 'EEE' }
  ];

  private courses: Course[] = [
    { id: 101, title: 'Operating Systems', credits: 4 },
    { id: 102, title: 'Database Management Systems', credits: 3 },
    { id: 103, title: 'Computer Networks', credits: 4 },
    { id: 104, title: 'Software Engineering', credits: 3 },
    { id: 105, title: 'Web Technologies', credits: 3 }
  ];

  private enrollments: Enrollment[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  getCourses(): Course[] {
    return this.courses;
  }

  enrollStudent(enrollment: Enrollment): void {
    this.enrollments.push(enrollment);
  }

  getEnrollments(): Enrollment[] {
    return this.enrollments;
  }
}
