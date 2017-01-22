import { PlayerService } from './foosball/player.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { DraggerComponent } from './foosball/dragger.component';
import { PlayerMatchupComponent } from './foosball/playerMatchup.component';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		DraggerComponent,
		PlayerMatchupComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		DragulaModule,
	],
	providers: [
		PlayerService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
