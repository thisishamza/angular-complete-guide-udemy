import { Component } from "@angular/core";

@Component({
  selector:'app-warning-alert',
  template:`<div class="container"><p>Warning Text</p></div>`,
  styles:[`
      p {
        padding:20px;
        background-color:mistyrose;
        border:1px solid red;
      }
      `
    ]
})
export class WarningAlertComponent{

}
