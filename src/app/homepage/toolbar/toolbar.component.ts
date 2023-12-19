import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  selectedDate: Date | null = new Date;
  user = this.authenticator.user;

  constructor(public authenticator: AuthenticatorService) { }

  ngOnInit(): void { }

}
