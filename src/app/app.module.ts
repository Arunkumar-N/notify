import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule , MatCheckboxModule, MatInputModule, MatRadioModule, MatToolbarModule, MatCardModule,MatMenuModule, MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { CommonComponent } from './common/common.component';
import { RuleCreationComponent } from './rule-creation/rule-creation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    CommonComponent,
    RuleCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    ScrollDispatchModule,
    RouterModule.forRoot(
      [{path: 'notification', component: NotificationComponent},
      {path: 'common', component: CommonComponent},
      {path: 'rule', component: RuleCreationComponent},
      { path: '',
      redirectTo: '/notification',
      pathMatch: 'full'
      },
      { path: '**', component: NotificationComponent }]
    )
  ],
  exports: [
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
