import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'bio', component: BioComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'work', component: WorkComponent },
      { path: '', pathMatch: 'full', redirectTo: 'bio' }

    ]
  },

  // { path: '', pathMatch: 'full', redirectTo: 'main' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
