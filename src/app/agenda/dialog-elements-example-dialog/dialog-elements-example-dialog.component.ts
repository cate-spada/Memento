import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { APIService, Evento, tipoNotifica } from 'src/app/API.service';
import { AgendaComponent } from '../agenda.component';
import { FormEventoComponent } from 'src/app/form-evento/form-evento.component';

@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrls: ['./dialog-elements-example-dialog.component.css']
})

export class DialogElementsExampleDialogComponent implements OnInit {

  @ViewChild(AgendaComponent, {static: false}) agenda!: AgendaComponent;
  @ViewChild(FormEventoComponent, {static: false}) eventoform!: FormEventoComponent;

  agendaId: any;
  eventoId: any;
  user = this.authenticator.user;
  public eventi: Array<Evento> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<DialogElementsExampleDialogComponent>,
    private router: Router,
    private route: ActivatedRoute,
    public api: APIService,
    public toastr: ToastrService,
    public authenticator: AuthenticatorService
    ) {
     this.agendaId = data.this;
     this.eventoId = data.this2;
  }

  async ngOnInit() {
    console.log('Id agenda', this.agendaId);
    console.log('Id evento', this.eventoId);
    this.api.ListEventos({agendaEventiId:{eq:this.agendaId}}).then((event) => {
      this.eventi = event.items as Evento[];
      console.log('ngOnInit form-evento',this.eventi);
    });
   }

  elimina(){
    let utente_creatore;
    for(let i = 0; i < this.eventi.length; i++){
      if(this.eventi[i].id == this.eventoId){
        utente_creatore = this.eventi[i].creatore;
      }
    }
    if(utente_creatore == this.user.username){//
      this.api.DeleteEvento({id: this.eventoId}).then(event=>{
        console.log("evento cancellato con successo!")
        this.toastr.success('Evento cancellato con successo!');
        let eventodarimuovere: Evento = <Evento> this.eventi.find(element => element.id === this.eventoId);

        this.notifica(
          <string[]> eventodarimuovere.partecipanti,
          tipoNotifica.CANCELLAZIONEEVENTO,
          "Evento cancellato!",
          event.id,
          event.agenda.id,
          event.titolo,
          event.agenda.nome);
        this.router.navigate(["/autenticazione/homepage"]);
      }).catch((e) => {
        console.log("Errore nella cancellazione dell'evento!", e);
        this.toastr.error("Errore nella cancellazione dell'evento!");
      });
    }else{
      console.log("Solo l'utente che ha creato l'evento può cancellarlo!");
      this.toastr.error("Solo l'utente che ha creato l'evento può cancellarlo!");

    }
  }

  notifica(partecipanti: string[], tiponotifica: tipoNotifica, messaggio: string, idEvento: string,
    idAgenda: string, nomeEvento: string, nomeAgenda: string){

    let creatore = this.user.username;
    console.log(partecipanti);

    this.api.CreateNotifica({
      tipo: tiponotifica,
      messaggio: messaggio,
      destinatari: partecipanti,
      utente: <string> creatore,
      nomeEvento: nomeEvento,
      idEvento: idEvento,
      nomeAgenda: nomeAgenda,
      idAgenda: idAgenda
    }).then(event =>{
      this.toastr.success("Notifica inviata agli altri utenti!");
      console.log('Notifica inviata agli altri utenti!');
    })
    .catch((e) => {
      console.log("Errore invio notifica agli altri utenti!", e);
      this.toastr.error("Errore invio notifica agli altri utenti!");
    });
  }

  modifica(){
    this.router.navigate(["/form-evento",  {
      idagenda: this.agendaId,
      idevento: this.eventoId,
      titleform: 'Modifica evento'
    }]);
  }

}
