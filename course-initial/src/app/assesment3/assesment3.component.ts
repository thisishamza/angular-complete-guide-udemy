import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assesment3',
  templateUrl: './assesment3.component.html',
  styleUrls: ['./assesment3.component.css']
})
export class Assesment3Component implements OnInit {
  paragraphStatus: boolean = false;
  timestamp = [];
  constructor() { }

  ngOnInit(): void {
  }
  setParagraphVisibility(){
    this.paragraphStatus = !this.paragraphStatus;

    let currentTimeInSeconds=new Date;
    this.timestamp.push(currentTimeInSeconds);
  }

}
