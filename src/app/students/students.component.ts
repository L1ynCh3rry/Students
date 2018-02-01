import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  student: Student;

  // student: Student = {
  //   id: 1,
  //   name: 'Petar Petrovic',
  //   gender: 'male',
  //   description: 'Petar petrovic deskripcija'
  // };
  // student = 'Petar petrovic';

  onSelectedStudent(student) {
    this.student = student;
  };




  constructor() { }

  ngOnInit() {
  }

}
