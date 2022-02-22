import { Component, OnInit } from '@angular/core';
@Component({
  //you can use class name as selector '.app-servers' also, in html you will have use a div having this class
  selector: 'app-servers', //works just like a css selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string ='No server was created.';
  serverName:string = '';
  isInputFilled:boolean = false;
  servers=['server1','server2'];
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created with name:' + this.serverName;
    this.servers.push(this.serverName);
    console.log(this.servers);
  }
  OnUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; //explicit casting of input type for typescript
    this.isInputFilled=true;
  }

  resetServer(){
    this.serverName="";
  }
}
