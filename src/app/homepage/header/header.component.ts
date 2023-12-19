import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = this.authenticator.user;

  constructor(public authenticator: AuthenticatorService) { }

  ngOnInit(): void { }

  signout(){
    this.authenticator.signOut();

  }

}
