import { Evento, Agenda } from 'src/app/API.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { ToastrService } from 'ngx-toastr';
import { APIService, Notifica, tipoNotifica } from '../API.service';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.css']
})
export class NotificheComponent implements OnInit {

  selectedDate: Date | null = new Date;
  notifiche: Array<Notifica> = [];
  eventi: Array<Evento> = [];
  agenda: Array<Agenda> = [];
  user = <string> this.authenticator.user.username;
  nomeagenda!: string;

  constructor(
    private api: APIService,
    public authenticator: AuthenticatorService,
    public toastr: ToastrService,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.api.ListNotificas({destinatari:{contains: this.user}}).then((event) => {
      this.notifiche = event.items as Notifica[];
      console.log(this.notifiche);
    });
  }

  elimina(idNotifica: string){
    this.api.DeleteNotifica({id :idNotifica}).then( event =>{
      console.log("Notifica cancellata con successo!")
      this.toastr.success('Notifica cancellata con successo!');
      this.router.navigate(["/notifiche"]);
    }).catch((e) => {
      console.log("Errore nella cancellazione dell'evento!", e);
      this.toastr.error("Errore nella cancellazione dell'evento!");
      this.router.navigate(["/notifiche"]);
    });
  }

  vediAgenda(idAgenda: string){
    this.router.navigate(["/app-agenda",{param: idAgenda}])
  }

  accetta(notifica: Notifica){
    if(notifica.tipo == tipoNotifica.CREAZIONEEVENTO || notifica.tipo == tipoNotifica.MODIFICAEVENTO ){
      let list :string[] = [this.user];
      this.api.UpdateNotifica({
        id: notifica.id,
        tipo: notifica.tipo,
        messaggio: notifica.messaggio,
        destinatari: notifica.destinatari,
        utente: notifica.utente,
        accettazione: list,
        nomeEvento: notifica.nomeEvento,
        idEvento: notifica.idEvento,
        nomeAgenda:notifica.nomeAgenda,
        idAgenda: notifica.idAgenda
      }).then(event =>{
        console.log('OK');
        console.log(event);
      }).catch((e) => {
        console.log('Errore', e);
      });
      this.cdr.markForCheck();

      this.router.navigate(["/notifiche"]);
    }else{
      this.router.navigate(["/autenticazione/homepage"]);
    }

  }

}
