import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { CardComponent } from './components/card/card.component';
import { SurpriseComponent } from './components/surprise/surprise.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: CardComponent, data: { animation: 'Card'}},
  { path: 'email', component: EmailComponent, data: { animation: 'Email'}},
  { path: 'surprise', component: SurpriseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
