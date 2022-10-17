import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { MovieScreenComponent } from './movie-screen/movie-screen.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';

const routes: Routes = [
  { path: '', component: MovieScreenComponent },
  { path: 'bookTicket/:id', component: TicketFormComponent },  
  { path: 'submit', component: ConfirmationComponent},
  { path: 'grid', component: DataGridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
