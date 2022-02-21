import { Component, OnInit } from '@angular/core';

@Component({
  //you can use class name as selector '.app-servers' also, in html you will have use a div having this class
  selector: 'app-servers', //works just like a css selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
