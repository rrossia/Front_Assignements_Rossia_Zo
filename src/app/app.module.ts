import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from'@angular/material/form-field';
import { MatInputModule } from'@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { NonRenduDirective } from './shared/non-rendu.directive';
import { FormsModule } from '@angular/forms';
import { AssignmentsDetailComponent } from './assignments/assignments-detail/assignments-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { RouterModule, Routes} from '@angular/router';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationComponent } from './authentification/authentification.component';
import {MatTabsModule} from '@angular/material/tabs';


const routes: Routes=[
  {path:'', component:AssignmentsComponent},
  {path:'home', component:AssignmentsComponent},
  {path:'add', component:AddAssignmentComponent},
  {path:'assignment/:id',component:AssignmentsDetailComponent },
  {path:'assignment/:id/edit',component:EditAssignmentComponent,
  canActivate: [AuthGuard] },
  {path:'authentification',component:AuthentificationComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    NonRenduDirective,
    AssignmentsDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatDividerModule,MatDatepickerModule,
    MatNativeDateModule,MatListModule,MatCardModule,MatCheckboxModule,MatSlideToggleModule,
    FormsModule,MatFormFieldModule, MatInputModule,
    RouterModule.forRoot(routes),HttpClientModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


