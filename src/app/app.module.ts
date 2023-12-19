import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,  } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ToastrModule } from 'ngx-toastr';
import { FullCalendarModule } from '@fullcalendar/angular';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { AutenticazioneComponent } from './autenticazione/autenticazione.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { ToolbarComponent } from './homepage/toolbar/toolbar.component';
import { HomeAgendaComponent } from './homepage/home-agenda/home-agenda.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormAgendaComponent } from './form-agenda/form-agenda.component';
import { FormDialogComponent } from './agenda/form-dialog/form-dialog.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DialogElementsExampleDialogComponent } from './agenda/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { NotificheComponent } from './notifiche/notifiche.component';


@NgModule({
  declarations: [
    AppComponent,
    AutenticazioneComponent,
    HomepageComponent,
    HeaderComponent,
    ToolbarComponent,
    HomeAgendaComponent,
    FormEventoComponent,
    FormAgendaComponent,
    FormDialogComponent,
    AgendaComponent,
    DialogElementsExampleDialogComponent,
    NotificheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModalModule,
    FlatpickrModule,
    ToastrModule.forRoot(),
    FullCalendarModule,

    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatProgressBarModule,
  ],
  providers: [AuthenticatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
