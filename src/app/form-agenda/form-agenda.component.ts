import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Agenda, APIService, tipoNotifica } from '../API.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormEventoComponent } from '../form-evento/form-evento.component';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrls: ['./form-agenda.component.css']
})

export class FormAgendaComponent implements OnInit {

  @ViewChild(FormEventoComponent) eventoform!: FormEventoComponent;
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  createForm: FormGroup;
  agende: Array<Agenda> = [];
  partecipanti!: FormArray;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  contatti: String[] = [];
  user = this.authenticator.user;

  constructor(
    private fb: FormBuilder,
    private api: APIService,
    private toastr: ToastrService,
    public authenticator: AuthenticatorService,
    private router: Router)  {
      this.partecipanti = new FormArray([new FormControl('')], Validators.required);
      this.createForm = this.fb.group({
        nome: ['', Validators.required],
        descrizione: [''],
        partecipanti: this.partecipanti,
      });
  }

  async ngOnInit() {
    this.api.ListAgenda().then((event) => {
      this.agende = event.items as Agenda[];
      console.log('ngOnInit form-agenda',this.agende);
    });
  }

  public onCreate(agenda: Agenda) {
    if (this.createForm.valid) {
      if(! this.contatti.includes(<string> this.user.username)){
        this.contatti.push(<string> this.user.username);
      }
      agenda.partecipanti = <string[]> this.contatti;
      this.api.CreateAgenda(agenda)
        .then((event) => {
          this.toastr.success('Agenda creata con successo!');
          this.router.navigate(['/app-agenda', {param: event.id}]);
          this.notifica(
            <string[]> this.contatti,
            tipoNotifica.CREAZIONEAGENDA,
            "Nuova agenda creata!",
            event.id,
            event.nome);
        })
        .catch((e) => {
          this.toastr.error("Errore nella creazione dell'agenda!");
        });
    }else{
      this.toastr.error('Campi obbligatori vuoti!');
    }


  }

  notifica(partecipanti: string[], tiponotifica: tipoNotifica, messaggio: string,
    idAgenda: string, nomeAgenda: string){
    this.api.CreateNotifica({
      tipo: tiponotifica,
      messaggio: messaggio,
      destinatari: partecipanti,
      utente: <string> this.user.username,
      nomeAgenda: nomeAgenda,
      idAgenda: idAgenda
    }).then(event =>{
      this.toastr.success("Notifica inviata!");
      console.log('Notifica inviata!');
    })
    .catch((e) => {
      console.log("Errore invio notifica!", e);
      this.toastr.error("Errore invio!");
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.contatti.push( value);
    }
    event.chipInput!.clear();
  }

  remove(contatto: String): void {
    const index = this.contatti.indexOf(contatto);
    if (index >= 0) {
      this.contatti.splice(index, 1);
    }
  }

  edit(contatto: String, event: MatChipEvent) {
    const value = event.chip.value;
    if (!value) {
      this.remove(contatto);
      return;
    }
    const index = this.contatti.indexOf(contatto);
    if (index >= 0) {
      this.contatti[index] = value;
    }
  }

}
