import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Evento, APIService, File } from '../API.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { Storage } from 'aws-amplify'


export interface allegato{
  nome: string,
  nomeEvento: string,
  idAllegato: string
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {

  public eventi: Array<Evento> = [];
  public agendaId: any;
  public allegatiEvento!: allegato[];
  allegati: Array<File> = [];
  public calendarVisible = true;
  public calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    locale: 'ita',

    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };
  currentEvents: EventApi[] = [];
  titolii: any;

  constructor(
    private api: APIService,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog) {  }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //idAgenda selezionata
      this.agendaId = params.get('param');
      console.log('ngOnInit-agenda: idAgenda',params.get('param'));
    });
    //preleva eventi agenda con idAgenda
    const filter = { agendaEventiId: { eq: this.agendaId } }
    this.api.ListEventos(filter).then(event => {
      this.eventi = event.items as Evento[];
      //inserisci nel calendario gli eventi selezionato
      this.calendarOptions.events = this.eventi.map( event =>{
        return {
          id: event.id,
          descrizione: event.descrizione,
          title: event.titolo,
          agenda: event.agenda,
          luogo: event.luogo,
          piattaforma: event.piattaforma,
          partecipanti: event.partecipanti,
          note: event.note,
          start: event.dataInizio,
          end: event.dataFine
        }
       });
     });
      this.api.ListFiles().then(event => {
        this.allegati =  event.items as File[];
        console.log( this.allegati);
      });
  }

  async download(filename: string){

    const file = await Storage.get(
      filename, {
      level: "private"
    });


  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    console.log('handleDateSelect');
     this.dialog.open(FormDialogComponent, {
        width: '250px',
        data : {this: this.agendaId},
      });
  }

  handleEventClick(clickInfo: EventClickArg) {
    console.log('handleEventClick');
    //this.router.navigate(["/dialog",{param1: <string> clickInfo.event.id, param2 : this.agendaId}]);
    this.dialog.open(DialogElementsExampleDialogComponent,{
      width: '250px',
      data : {
        this: this.agendaId,
        this2: clickInfo.event.id,
      }
    });
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }


}
