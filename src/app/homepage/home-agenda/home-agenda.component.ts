import { Component } from '@angular/core';
import { APIService, Agenda } from 'src/app/API.service';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-agenda',
  templateUrl: './home-agenda.component.html',
  styleUrls: ['./home-agenda.component.css']
})
export class HomeAgendaComponent {

  public agende: Array<Agenda> = [];
  user = <string> this.authenticator.user.username; //Username o email????????

  constructor(private api: APIService, public authenticator: AuthenticatorService, private router: Router) {  }

  ngOnInit() {
    this.api.ListAgenda({partecipanti:{contains: this.user}}).then((event) => {
      this.agende = event.items as Agenda[]  ;
      console.log('ngOnInit home-agenda',this.agende);
    });
  }

  onSubmit(idAgenda: string){
    this.router.navigate(["/app-agenda",{param: idAgenda}])
  }

}
