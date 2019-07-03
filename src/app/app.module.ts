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
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
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
