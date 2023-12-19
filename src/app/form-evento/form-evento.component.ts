import { File, tipoNotifica } from './../API.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Evento, APIService } from 'src/app/API.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEvent, MatChipInputEvent} from '@angular/material/chips';
import { Storage } from 'aws-amplify'
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit{

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];//
  public createForm: FormGroup;
  public eventi: Array<Evento> = [];
  partecipanti!: FormArray;
  //allegati!: FormArray;
  dataInizio = new FormControl(new Date());
  dataFine = new FormControl(new Date());
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  contatti: String[] = [];//
  selectedFiles!: FileList;
  fileNames: string[] = [];
  fileCreato!: File;
  idAgenda: any;
  idEvento: any;
  title: string = '';
  user = this.authenticator.user;

  constructor(
    private fb: FormBuilder,
    private api: APIService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    public authenticator: AuthenticatorService,
    ) {
      this.partecipanti = new FormArray([new FormControl('')], Validators.required);
      this.createForm = this.fb.group({
        titolo: ['', Validators.required],
        descrizione: [''],
        creatore: [''],
        luogo: [''],
        piattaforma: [''],
        partecipanti: this.partecipanti,
        note: [''],
        dataInizio: [new Date(), Validators.required],
        dataFine: [new Date(), Validators.required]
      });
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idAgenda = params.get('idagenda');
      this.idEvento = params.get('idevento');
      this.title = <string> params.get('titleform');
      console.log(this.idAgenda );
      console.log('id-evento',this.idEvento );
    });
    this.api.ListEventos({agendaEventiId:{eq:this.idAgenda}}).then((event) => {
      this.eventi = event.items as Evento[];
      console.log('ngOnInit form-evento',this.eventi);
    });
  }

  onClick2(){
    this.router.navigate(['/app-agenda', {param: this.idAgenda}]);
  }

  onFileSelected(event: Event) {
    this.selectedFiles = <FileList>(event.target as HTMLInputElement).files;
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.fileNames.push(this.selectedFiles[i].name);
    }
  }

  onUpload(){
    const file = this.selectedFiles[0];
    const fileName = <string> file.name;
    const fileType = <string> file.type;
    Storage.put(
      fileName,
      file, {
      contentType:  fileType,
      level: 'private'
    });
  }

  public onCreate(evento: Evento) {
    let operazione = '';
    let permesso = false;
    const utente_creatore = this.user.username;
    evento.creatore = this.user.username;
    for(let i = 0; i < this.eventi.length; i++) {
      if(this.eventi[i].id == this.idEvento){
         operazione = 'modifica';
      }
      if(this.eventi[i].id == this.idEvento && this.eventi[i].creatore ==  evento.creatore){

         permesso = true;
      }

    }

   console.log(operazione);

    //MODIFICA EVENTO
    if(operazione == 'modifica' && permesso){
      console.log('MODIFICA');
      if(this.contatti.length === 0){
        this.contatti = <string[]> evento.agenda.partecipanti;
      }
      if(! this.contatti.includes(<string> utente_creatore)){
        this.contatti.push(<string> utente_creatore);
      }
      evento.partecipanti = <string[]> this.contatti;
      this.api.UpdateEvento({
        id: this.idEvento,
        descrizione: evento.descrizione,
        creatore: utente_creatore,
        titolo: evento.titolo,
        luogo: evento.luogo,
        piattaforma:  evento.piattaforma,
        partecipanti: evento.partecipanti,
        note: evento.note,
        dataInizio: evento.dataInizio,
        dataFine: evento.dataFine,
        agendaEventiId: this.idAgenda,
      })
      .then((event) => {
        console.log('item created!');
        this.toastr.success('Evento modificato con successo!');
        this.router.navigateByUrl('/autenticazione/homepage/homeagenda');
        this.notifica(
          <string[]> evento.partecipanti,
          tipoNotifica.MODIFICAEVENTO,
          "Evento modificato!",
          event.id,
          event.agenda.id,
          event.titolo,
          event.agenda.nome);
        //CREA RECORD NELLA TABELLA FILE SE PRESENTI ALLEGATI
        console.log(this.selectedFiles);
        for(let i = 0; i < this.selectedFiles.length; i++){
          this.api.CreateFile(  {
            nome: this.selectedFiles[i].name,
            tipo: this.selectedFiles[i].type,
            eventoAllegatiId: event.id,
            nomeEvento: event.titolo,
            idEvento: event.id
          }).then((event) => {
              this.toastr.success("File caricato correttamente!");
              console.log('File caricato correttamente!');
          })
          .catch((e) => {
            console.log("File non caricato correttamente!", e);
            this.toastr.error("File non caricato correttamente!");
          });
        }
      })
     ;
    }
    else if( operazione == ''){
      //CREA NUOVO EVENTO
      if (this.createForm.valid) {
        console.log('CREA');
        if(this.contatti.length === 0){
          this.contatti = <string[]> evento.agenda.partecipanti;
        }
        if(! this.contatti.includes(<string> utente_creatore)){
          this.contatti.push(<string> utente_creatore);
        }
        console.log(this.contatti);
        evento.partecipanti = <string[]> this.contatti;
        console.log( evento.partecipanti );
        this.api.CreateEvento({
          titolo: evento.titolo,
          descrizione: evento.descrizione,
          creatore: utente_creatore,
          luogo: evento.luogo,
          piattaforma:  evento.piattaforma,
          partecipanti:  evento.partecipanti,
          note: evento.note,
          dataInizio: evento.dataInizio,
          dataFine: evento.dataFine,
          agendaEventiId: this.idAgenda,
        }).then((event) => {
            console.log('item created!');
            this.toastr.success('Evento creato con successo!');
            this.router.navigateByUrl('/autenticazione/homepage/homeagenda');
            this.notifica(
              <string[]>  evento.partecipanti,
              tipoNotifica.CREAZIONEEVENTO,
              "Nuovo evento creato!",
               event.id,
               event.agenda.id,
               event.titolo,
               event.agenda.nome);
              //CREA RECORD NELLA TABELLA FILE SE PRESENTI ALLEGATI

              if(this.selectedFiles.length != 0){
                 for(let i = 0; i < this.selectedFiles.length; i++){
                this.api.CreateFile(  {
                  nome: this.selectedFiles[i].name,
                  tipo: this.selectedFiles[i].type,
                  eventoAllegatiId: event.id,
                  nomeEvento: event.titolo,
                  idEvento: event.id
                }).then((event) => {
                    this.toastr.success("File caricato correttamente!");
                    console.log('File caricato correttamente!');
                })
                .catch((e) => {
                  console.log("File non caricato correttamente!", e);
                  this.toastr.error("File non caricato correttamente!");
                });
               }
              }
            })
        ;
      }else{
        this.toastr.error('Campi obbligatori vuoti!');
      }
    //UTENTE NON CREATORE
   }else if (operazione == 'modifica' && !permesso) {
      console.log("Solo l'utente che ha creato l'evento può modificarlo!");
      this.toastr.error("Solo l'utente che ha creato l'evento può modificarlo!");
   }
  }

  notifica(partecipanti: string[], tiponotifica: tipoNotifica, messaggio: string,  idEvento: string,
    idAgenda: string, nomeEvento: string, nomeAgenda: string){
    console.log(partecipanti);
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
