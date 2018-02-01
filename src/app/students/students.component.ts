import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';
import { MockServiceService } from '../mock-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  student: Student;


  onSelectedStudent(student) {
    this.selectedStudent = student;
  }




  constructor(private mockService: MockServiceService) { }

  ngOnInit() {
      this.getStudents();
  }


  getStudentsFromService(): void {
    this.students = this.mockService.getStudentsFromMockFile();
  }



}
