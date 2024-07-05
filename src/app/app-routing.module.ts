import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AuthGuard } from './auth.guard';
import { NoteReviewComponent } from './note-review/note-review.component';

const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {path : 'data', component:DataTableComponent,canActivate: [AuthGuard]},
  {path : 'note/:id', component:NoteReviewComponent,canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
