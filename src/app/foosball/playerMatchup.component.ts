import { PlayerService } from './player.service';
import { IPlayer } from './player.interface';
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
	selector: 'player-matchup',
	templateUrl: 'playerMatchup.component.html',
	styleUrls: ['./dragula.min.css', './dragger.component.css', 'playerMatchup.component.css'],

})
export class PlayerMatchupComponent implements OnInit {

	private players: IPlayer[];
	public over1: boolean = false; 
	public over2: boolean = false; 

	constructor(
		private _playerService: PlayerService,
		private _dragulaService: DragulaService
	) {
		_dragulaService.drag.subscribe((value) => {
			// this.onDrag(value.slice(1));
			// });
			_dragulaService.drop.subscribe((value) => {
			this.onDrop(value.slice(1));
			});
			_dragulaService.over.subscribe((value) => {
			this.onOver(value.slice(1));
			});
			_dragulaService.out.subscribe((value) => {
			this.onOut(value.slice(1));
			});
		});
	}

	ngOnInit() { 
		this.players = this._playerService.getPlayers();
	}

	onOver(args) {
		let [element, target, source] = args;
		if (target.id == 'player1') {
			this.over1 = true;
			this.over2 = false;
		} else if (target.id == 'player2') {
			this.over1 = false;
			this.over2 = true;
		} else {
			this.over1 = false;
			this.over2 = false;
		}
	}

	onDrop(args) {
		this.over1 = false;
		this.over2 = false;
	}

	onOut(value) {

	}
}