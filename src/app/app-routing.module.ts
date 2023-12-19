import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { AutenticazioneComponent } from './autenticazione/autenticazione.component';
import { FormAgendaComponent } from './form-agenda/form-agenda.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { HomeAgendaComponent } from './homepage/home-agenda/home-agenda.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificheComponent } from './notifiche/notifiche.component';
import { ToolbarComponent } from './homepage/toolbar/toolbar.component';

const routes: Routes = [
  { path: '',   redirectTo: '/autenticazione', pathMatch: 'full' },
  { path: 'autenticazione', component: AutenticazioneComponent, children:[
    { path: 'homepage', component: HomepageComponent, children:[
      { path: 'homeagenda', component: HomeAgendaComponent},
    ]},
  ]},
  { path: 'toolbar', component: ToolbarComponent},
  { path: 'form-evento', component: FormEventoComponent},
  { path: 'form-agenda', component: FormAgendaComponent},
  { path: 'app-agenda', component: AgendaComponent},
  { path: 'notifiche', component: NotificheComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
