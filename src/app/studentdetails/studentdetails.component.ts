import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  students: any[] = [
    {
        Name: 'Name1', Email: 'email@gmail.com', Marks: 55
    },
    {
      Name: 'Name2', Email: 'Email2@gmail.com', Marks: 30
    },
    {
      Name: 'Name3', Email: 'Email2@gmail.com', Marks: 70
    },
    {
      Name: 'Name4', Email: 'Email2@gmail.com', Marks: 99
    }
];

rowWithBiggestNumber: any | undefined;
constructor() {}
ngOnInit(): void {
}
}
