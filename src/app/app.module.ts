import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { LeftSideComponent } from './left_side/left_side.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DATE_LOCALE,
      useValue: 'es-SP'
    }
  ]
})
export class AppModule { }
