import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsShowComponent } from './stats-show/stats-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { TweetsDivComponent } from './tweets-div/tweets-div.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsShowComponent,
    TweetsDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MglTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
